    const afterInitialLoad = callback => {
      const run = () => setTimeout(callback, 0);
      if (document.readyState === 'complete') {
        run();
      } else {
        window.addEventListener('load', run, { once: true });
      }
    };

    const loadBrandFonts = () => {
      [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
        'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600;1,9..144,700&display=swap'
      ].forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    const scheduleBrandFonts = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(loadBrandFonts, { timeout: 1500 });
      } else {
        setTimeout(loadBrandFonts, 1);
      }
    };

    afterInitialLoad(scheduleBrandFonts);

    afterInitialLoad(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    document.querySelectorAll('.video-facade').forEach(facade => {
      const activate = () => {
        const id = facade.dataset.videoId;
        if (!id) return;
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&origin=${window.location.origin}`;
        iframe.title = facade.getAttribute('aria-label') || 'Видео';
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('allowfullscreen', '');
        iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0;display:block;';
        facade.replaceWith(iframe);
      };
      facade.addEventListener('click', activate);
      facade.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
      });
    });

    document.querySelectorAll('.faq-question').forEach(button => {
      const toggleFaq = () => {
        const isOpen = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!isOpen));
        button.closest('.faq-item')?.classList.toggle('open', !isOpen);
      };

      button.addEventListener('click', toggleFaq);
      button.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggleFaq();
        }
      });
    });

    // Style Marquee — бесконечная лента-конвейер стилей
    (function() {
      const marquee = document.getElementById('styleMarquee');
      const track = document.getElementById('styleMarqueeTrack');
      if (!marquee || !track) return;

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

      // Дублируем набор карточек один раз — для бесшовного цикла
      if (!reduced.matches) {
        Array.from(track.children).forEach(node => {
          const clone = node.cloneNode(true);
          clone.setAttribute('aria-hidden', 'true');
          clone.setAttribute('tabindex', '-1');
          track.appendChild(clone);
        });
      }

      // Тач-устройства: тап фиксирует карточку и ставит ленту на паузу
      if (window.matchMedia('(hover: none)').matches) {
        const hint = document.getElementById('styleMarqueeHint');
        if (hint) hint.textContent = 'коснись карточки, чтобы рассмотреть';

        let active = null;
        function clearActive() {
          if (active) { active.classList.remove('is-active'); active = null; }
          marquee.classList.remove('is-paused');
        }
        track.addEventListener('click', (e) => {
          const card = e.target.closest('.style-card');
          if (!card) return;
          if (active === card) { clearActive(); return; }
          if (active) active.classList.remove('is-active');
          card.classList.add('is-active');
          active = card;
          marquee.classList.add('is-paused');
        });
        document.addEventListener('click', (e) => {
          if (!e.target.closest('#styleMarquee')) clearActive();
        });
      }
    })();

    (function() {
      const loadImage = img => {
        if (!img.dataset.src) return;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      };

      const lazyImages = () => Array.from(document.querySelectorAll('img[data-src]'));
      if (!('IntersectionObserver' in window)) {
        window.addEventListener('load', () => lazyImages().forEach(loadImage), { once: true });
        return;
      }

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          loadImage(entry.target);
          observer.unobserve(entry.target);
        });
      }, { rootMargin: '280px 0px' });

      lazyImages().forEach(img => observer.observe(img));
    })();

    // Лайтбокс каруселей — листание слайдов
    (function() {
      const box = document.getElementById('caraLightbox');
      const img = document.getElementById('caraImg');
      const counter = document.getElementById('caraCounter');
      const btnPrev = document.getElementById('caraPrev');
      const btnNext = document.getElementById('caraNext');
      const btnClose = document.getElementById('caraClose');
      const covers = Array.from(document.querySelectorAll('.cara-cover'));
      if (!box || !img || !covers.length) return;

      let slug = '', count = 0, index = 0, trigger = null;

      const src = (s, i) => `assets/carousels/${s}/slide-${String(i + 1).padStart(2, '0')}.jpg`;

      function preload(i) {
        if (i < 0 || i >= count) return;
        const p = new Image();
        p.src = src(slug, i);
      }

      function show(i) {
        index = (i + count) % count;
        img.src = src(slug, index);
        img.alt = `Слайд ${index + 1} из ${count}`;
        counter.textContent = `${index + 1} / ${count}`;
        preload(index + 1);
        preload(index - 1);
      }

      function open(cover) {
        slug = cover.dataset.slug;
        count = parseInt(cover.dataset.count, 10) || 1;
        trigger = cover;
        box.hidden = false;
        box.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        show(0);
        btnClose.focus();
      }

      function close() {
        box.classList.remove('is-open');
        box.hidden = true;
        document.body.style.overflow = '';
        if (trigger) trigger.focus();
      }

      covers.forEach(c => c.addEventListener('click', () => open(c)));
      btnPrev.addEventListener('click', () => show(index - 1));
      btnNext.addEventListener('click', () => show(index + 1));
      btnClose.addEventListener('click', close);
      box.addEventListener('click', (e) => { if (e.target === box) close(); });

      document.addEventListener('keydown', (e) => {
        if (box.hidden) return;
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowLeft') show(index - 1);
        else if (e.key === 'ArrowRight') show(index + 1);
      });

      // Свайп на тач-устройствах
      let startX = null;
      box.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
      box.addEventListener('touchend', (e) => {
        if (startX === null) return;
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
        startX = null;
      }, { passive: true });
    })();

    // Обратный отсчёт акции: VibeClaw в подарок до 28 июня 23:59 (МСК)
    (function() {
      const deadline = new Date('2026-06-28T23:59:59+03:00').getTime();
      const groups = {
        days: document.querySelectorAll('[data-countdown="days"]'),
        hours: document.querySelectorAll('[data-countdown="hours"]'),
        minutes: document.querySelectorAll('[data-countdown="minutes"]'),
        seconds: document.querySelectorAll('[data-countdown="seconds"]')
      };
      const hasNodes = Object.keys(groups).some(k => groups[k].length);
      if (!hasNodes) return;

      const pad = n => String(n).padStart(2, '0');
      const setText = (list, value) => list.forEach(el => { el.textContent = value; });

      function tick() {
        const diff = deadline - Date.now();
        if (diff <= 0) {
          setText(groups.days, '00');
          setText(groups.hours, '00');
          setText(groups.minutes, '00');
          setText(groups.seconds, '00');
          document.documentElement.classList.add('promo-ended');
          return false;
        }
        const total = Math.floor(diff / 1000);
        setText(groups.days, pad(Math.floor(total / 86400)));
        setText(groups.hours, pad(Math.floor((total % 86400) / 3600)));
        setText(groups.minutes, pad(Math.floor((total % 3600) / 60)));
        setText(groups.seconds, pad(total % 60));
        return true;
      }

      if (tick()) {
        const timer = setInterval(() => { if (!tick()) clearInterval(timer); }, 1000);
      }
    })();

    // Карусель скриншотов VibeClaw
    (function() {
      const track = document.getElementById('shotsTrack');
      if (!track) return;
      const prev = document.querySelector('.shots-nav--prev');
      const next = document.querySelector('.shots-nav--next');

      const stepSize = () => {
        const card = track.querySelector('.shot');
        const gap = parseFloat(getComputedStyle(track).gap) || 24;
        return card ? card.getBoundingClientRect().width + gap : 260;
      };

      if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -stepSize(), behavior: 'smooth' }));
      if (next) next.addEventListener('click', () => track.scrollBy({ left: stepSize(), behavior: 'smooth' }));

      const update = () => {
        const max = track.scrollWidth - track.clientWidth;
        if (prev) prev.disabled = track.scrollLeft <= 4;
        if (next) next.disabled = track.scrollLeft >= max - 4;
      };

      track.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      update();
    })();
    });
