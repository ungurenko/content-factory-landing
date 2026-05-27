---
name: Контент-завод
description: Лендинг персональной ИИ-системы производства контента — редакция-мастерская в тёплой бумажной палитре.
colors:
  paper-cream: "#F5F0E8"
  paper-aged: "#EDE8DF"
  press-ink: "#2D2520"
  press-ink-deep: "#1A1714"
  worn-sepia: "#6B5E52"
  bleached-paper: "#FEFEFE"
  hairline: "rgba(45, 37, 32, 0.08)"
  terracotta: "#E8822A"
  terracotta-hover: "#D4741F"
  terracotta-deep: "#C56519"
  terracotta-soft: "#F4A85C"
  terracotta-glaze: "rgba(232, 130, 42, 0.10)"
  field-olive: "#7A8E55"
  burnt-sienna: "#8C5826"
  goal-green: "#27AE60"
  goal-green-deep: "#1E8449"
  stop-red: "#C0392B"
typography:
  display:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.25rem, 2.4vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2rem, 3.8vw, 3.2rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.1em"
rounded:
  pill: "100px"
  card: "20px"
  card-hero: "24px"
  button: "14px"
  button-large: "16px"
  field: "12px"
  chip: "10px"
  hairline: "8px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "7": "28px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.bleached-paper}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "16px 32px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.terracotta-hover}"
    textColor: "{colors.bleached-paper}"
  button-large:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.bleached-paper}"
    typography: "{typography.body}"
    rounded: "{rounded.button-large}"
    padding: "20px 40px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.terracotta}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "14px 30px"
  button-outline-hover:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.bleached-paper}"
  segment-card:
    backgroundColor: "{colors.bleached-paper}"
    textColor: "{colors.press-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.card}"
    padding: "32px 24px"
  segment-card-hover:
    backgroundColor: "{colors.bleached-paper}"
    textColor: "{colors.press-ink}"
  section-badge:
    backgroundColor: "{colors.terracotta-glaze}"
    textColor: "{colors.terracotta-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  pricing-label:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.bleached-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
  field:
    backgroundColor: "{colors.bleached-paper}"
    textColor: "{colors.press-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "14px 16px"
---

# Design System: Контент-завод

## 1. Overview

**Creative North Star: "The Editorial Workshop"**

Лендинг — это не сайт, это разворот independent magazine, собранный в студии выпуска. Серифный курсив Fraunces сплетается с строгим Inter, как заголовок с подверсткой. Цвет бумаги, ручная SVG-флористика по углам видео-блока, washi-скотч на polaroid, бегущая лента «23 СКИЛЛА ✦ АВТОПУБЛИКАЦИЯ» — всё это следы редакции, а не SaaS-шаблона.

Метафора «завода» работает через серийность (16 пронумерованных блоков, 27 функций, повторяющиеся ритмы), а не через холодную индустриальность. Палитра — обожжённая глина и тёплая бумага — отказ от двух стандартных рефлексов отрасли: «AI-тул значит тёмно-синий» и «лендинг значит белый + градиент». Никаких сине-фиолетовых небес, glassmorphism, изометрических мокапов. Никаких капс-офферов с восклицаниями.

Плотность регулируется ритмом, не количеством элементов. Блоки чередуются: широкие — узкие, светлые — тёмные, плотный список болей — воздушная цитата с гигантским декоративным кавычным знаком, табличное сравнение — рукодельный polaroid. Читатель должен дочитать до конца, не до середины.

**Key Characteristics:**
- Бумажная палитра вместо белого фона; терракота вместо корпоративного синего.
- Двойная типографика: Inter 800 с italic-вставками Fraunces 600 в каждом крупном заголовке.
- Рукотворные SVG-декорации (флора, точки, кривые) и материальные следы (washi, polaroid, marquee).
- Flat-by-default: тени работают как «пыль над бумагой», а не как инженерная иерархия.
- Серийный ритм 16 блоков, но без однообразия — каждый блок узнаваем визуально.

## 2. Colors: The Pressroom Palette

Тёплая бумага, обожжённая глина и индустриальная сажа. Цвет следует за метафорой мастерской — не за корпоративной таблицей tones.

### Primary
- **Workshop Terracotta** (`#E8822A`): главный акцент. Цвет обожжённой глины. Используется на CTA-кнопках, в `<em>`-вставках заголовков, в SVG-цветах, в decorative quote mark, в hover-границах карточек. Ограничен ~10% площади экрана — его редкость и есть голос.
- **Workshop Terracotta Hover** (`#D4741F`): притемнение акцента в hover/focus.
- **Workshop Terracotta Deep** (`#C56519`): тяжёлая версия для типографических акцентов на тёплом фоне (label-цвет на стеклянной плашке `terracotta-glaze`).
- **Workshop Terracotta Soft** (`#F4A85C`): осветлённая версия для SVG-акцентов второго плана и градиентных подложек.

### Secondary
- **Field Olive** (`#7A8E55`): олива, появляется только в декоративных SVG-цветах вокруг видео-фрейма. Никогда не используется на UI-элементах.
- **Burnt Sienna** (`#8C5826`): обожжённая сиена, цвет тонких рукодельных штрихов в декоративных SVG.

### Neutral (Paper)
- **Warm Paper Cream** (`#F5F0E8`): основной фон — цвет тёплой матовой бумаги. Никогда не `#fff`. Никогда не `#000`. Каждый нейтральный оттенок подкручен в сторону тёплого спектра.
- **Aged Paper** (`#EDE8DF`): второй фон для чередующихся секций (`section--alt`) и плейсхолдеров изображений.
- **Pressroom Ink** (`#2D2520`): основной текст на бумаге, фон тёмных секций (`section--dark`).
- **Pressroom Ink Deep** (`#1A1714`): глубокая версия для финальных CTA-секций и footer.
- **Worn Sepia** (`#6B5E52`): muted-текст подзаголовков и второстепенной информации. Контраст ~5.8:1 на бумажном фоне.
- **Bleached Paper** (`#FEFEFE`): белый текст на терракоте и на тёмных секциях. Не чистый `#fff` — едва заметная тёплая нота.
- **Hairline** (`rgba(45, 37, 32, 0.08)`): полупрозрачный разделитель из чернил — для границ полей, тонких линий между pain-items, нижней границы footer.

### Functional
- **Goal Green** (`#27AE60`) / **Goal Green Deep** (`#1E8449`): подсветка цены и success-состояний. Используется только в `hero__price-note` и `:user-invalid`-зеркале.
- **Stop Red** (`#C0392B`): error/invalid. Не используется как акцент, не используется в маркетинге.

### Named Rules

**The One Voice Rule.** Терракотовый акцент работает на ≤10% любого экрана — на CTA, в italic-вставках заголовков, в radial-gradient декорах. Если он начинает доминировать, это уже не голос, а крик.

**The Tinted Neutral Rule.** В палитре нет ни одного чистого `#000`, ни одного чистого `#fff`. Любой нейтральный оттенок имеет тёплую подкрутку. `#FEFEFE` вместо `#FFFFFF`. `#1A1714` вместо `#000`.

**The Decor-Only Olive Rule.** Field Olive и Burnt Sienna появляются исключительно в рукодельных SVG-декорациях (флора вокруг видео, акценты в иллюстрациях). Никогда — на UI: ни на кнопке, ни в тексте, ни на бордюре карточки.

## 3. Typography: Inter × Fraunces

**Display Font:** Fraunces (с fallback Georgia, 'Times New Roman', serif). Italic 500/600/700, upright 700.
**Body Font:** Inter (с fallback -apple-system, BlinkMacSystemFont, sans-serif). 400/500/600/700/800/900.
**Label / Mono Font:** не выделена — UI-метки набираются Inter 700 в широком letter-spacing.

**Character.** Inter держит структуру, Fraunces вносит редакционный голос. Italic Fraunces 600 появляется внутри `<em>` в каждом крупном заголовке («Контент-завод *под ключ*», «Эксперт с блогом, который *устал писать*») — это дыхание, без которого Inter был бы slick-product-ным. Fraunces upright 700 используется для гигантских декоративных кавычных знаков над pull-quote (`amplifier`).

### Hierarchy
- **Display** (Fraunces italic 600, `clamp(1.25rem, 2.4vw, 1.75rem)`, line-height 1.4): editorial pull-quote (`amplifier`) и italic-вставки внутри заголовков. Никогда не используется для длинного абзаца.
- **Headline** (Inter 800, `clamp(2rem, 3.8vw, 3.2rem)`, line-height 1.1, letter-spacing -0.02em): только `<h1>` в Hero.
- **Title** (Inter 800, `clamp(1.8rem, 3.5vw, 2.6rem)`, line-height 1.15, letter-spacing -0.02em): `<h2>` секций.
- **Subtitle / Lead** (Inter 400, `clamp(0.95rem, 1.1vw, 1.05rem)`, line-height 1.65, color `worn-sepia`): подзаголовки секций и hero-subtitle. Max-width 480-600px.
- **Body** (Inter 400, 0.95rem, line-height 1.65): основной текст. Длина строки ограничена 65–75ch контейнерами `--container-prose` (960px) и `--container-narrow` (720px).
- **Label** (Inter 700, 0.78rem, letter-spacing 0.1em, UPPERCASE): section-badge, pricing-label, button-stub-label.
- **Eyebrow / Stat** (Inter 700, 0.72rem, letter-spacing 0.16em, UPPERCASE): меньшие метки — stat-label, stamp-текст, video-meta.

### Named Rules

**The Italic Heartbeat Rule.** В каждом крупном заголовке (`<h1>`, `<h2>`) одно слово или короткая фраза набрана Fraunces italic 600 через `<em>`. Это не декорация — это акустический сдвиг, без которого голос лендинга становится product-marketing-ным.

**The 65–75ch Rule.** Любой длинный абзац (`<p>` дольше 2 строк) ограничен по ширине через `max-width: 480–600px` или контейнер `--container-prose`. Текст 100% ширины экрана — запрещён.

**The Upper-Case Reserve Rule.** UPPERCASE появляется только на label-уровне (section-badge, pricing-label, eyebrow). Любой текст крупнее `--fs-base` — никогда не в верхнем регистре. Капс-заголовков нет.

## 4. Elevation: Dust over Paper

Лендинг — flat-by-default. Тени не строят инженерную иерархию слоёв, как в Material; они работают «как пыль» — мягкое свечение под поднимающейся карточкой, диффузный ореол под pricing-card, лёгкое смещение polaroid от плоскости фона. Глубина в основном создаётся тоном: чередование `paper-cream` ↔ `paper-aged` секций даёт больше визуальной структуры, чем shadow-tokens.

### Shadow Vocabulary
- **`--card-shadow`** (`0 2px 20px rgba(45, 37, 32, 0.06)`): едва заметное «дыхание» под карточкой в покое. Большинство элементов в покое — flat (этот токен почти не используется на default-state).
- **`--shadow-soft`** (`0 8px 32px rgba(45, 37, 32, 0.10)`): мягкая «пыль» вокруг pricing-card и важных контейнеров.
- **`--shadow-accent`** (`0 8px 28px rgba(232, 130, 42, 0.30)`): тёплое свечение под основной CTA-кнопкой при hover/focus. Не цветной drop-shadow в обычном смысле — это «свет, отброшенный самой кнопкой».
- **`--shadow-floating`** (`0 16px 44px rgba(45, 37, 32, 0.14)`): резерв для сильно поднятых элементов (FAQ-аккордеон в открытом состоянии, sticky-CTA на мобильном).
- **`--focus-ring`** (`0 0 0 4px rgba(232, 130, 42, 0.24)`): кольцо фокуса в терракотовом стекле — единственная тень, которая обязательна на интерактивных элементах.

### Named Rules

**The Flat-By-Default Rule.** Поверхности плоские в покое. Тени появляются только как реакция на состояние (hover, focus, active) или для одной-двух акцентных карточек, которым нужно «выделиться над страницей» (pricing-card, segment-card--featured). Если тень появилась в default-state — это лень.

**The Tonal Layer Rule.** Глубина между секциями строится через тон фона (`paper-cream` ↔ `paper-aged` ↔ `press-ink`), а не через тени. Чередование секций `section--warm` / `section--alt` / `section--dark` — основной инструмент ритма.

**The Dust, Not Drop Rule.** Тени — диффузные и мягкие (blur ≥ 20px, opacity ≤ 0.14). Резкие drop-shadow с маленьким blur — запрещены. Если тень видна как чёткая линия, она настроена неправильно.

## 5. Components

### Buttons

#### Primary (`.btn`)
- **Shape:** прямоугольник с мягко скруглёнными углами (`border-radius: 14px`).
- **Background / Text:** Workshop Terracotta `#E8822A` / Bleached Paper `#FEFEFE`.
- **Padding / Height:** `16px 32px`, min-height `52px`. Шрифт Inter 600, 0.95rem.
- **Default state:** flat плюс лёгкая «пыль» `0 4px 16px rgba(232, 130, 42, 0.25)` — терракотовый ореол.
- **Hover / Focus:** фон уходит в Terracotta Hover, тень разгорается до `--shadow-accent`, `transform: translateY(-2px)`. Кнопка «приподнимается».
- **Active:** `transform: translateY(1px) scale(0.98)` — короткое нажатие.
- **Large variant** (`.btn--large`): `padding: 20px 40px`, `border-radius: 16px`, `font-size: 1.05rem`. Используется в pricing-card и Final CTA.
- **Outline variant** (`.btn--outline`): прозрачный фон, `border: 2px solid var(--accent)`, текст в терракоте. На hover — заливается терракотой.
- **Disabled:** серый фон `#999`, opacity 0.7, без тени, без transform.

#### Hero Signature Button (`.hero__button`)
Не «обычная кнопка с бейджем». Это два склеенных модуля одного билета: основная панель `Занять место →` слева и перфорированная заглушка-корешок справа с метрикой `осталось 3 из 5`. По стыку — две круглые «насечки» (`hero__button-stub-perf`), как след дырокола. Фон main-панели — Pressroom Ink, фон stub — Workshop Terracotta. На hover вся конструкция приподнимается, стрелка сдвигается на 4px вправо. Это сигнатурный компонент — не повторять в других местах, не упрощать до plain CTA.

### Section Badge (`.section__badge`)
- **Style:** маленький pill-бейдж с эмодзи и текстом в верхнем регистре.
- **Background / Text:** `terracotta-glaze` (rgba 232,130,42, 0.10) / Workshop Terracotta Deep `#C56519`.
- **Typography:** Inter 700, 0.78rem, letter-spacing 0.1em, UPPERCASE.
- **Shape:** `border-radius: 100px` (full pill), padding `6px 14px`.
- **Variant** в `section--dark`: фон становится прозрачно-белым, текст — Bleached Paper.

### Cards

Карточки — не «универсальная обёртка». Используются только там, где элемент действительно должен «лежать на странице как вырезка». Pain-items, например, осознанно не карточки — это плоский список с тонким разделителем (`The Anti-Card Rule` из Do's/Don'ts).

#### Segment Card (`.segment-card`)
- **Corner Style:** 20px (`--radius-card`).
- **Background:** Bleached Paper плюс полупрозрачный radial-gradient акцент в правом верхнем углу (`rgba(232, 130, 42, 0.18)` → transparent, диаметр 280px).
- **Border:** `1px solid hairline`.
- **Shadow Strategy:** flat в покое (см. Elevation). На hover — `0 18px 44px -22px rgba(45, 37, 32, 0.22)` плюс `translateY(-3px)`, граница затемняется до `rgba(232, 130, 42, 0.35)`, акцентный radial-gradient слегка двигается.
- **Internal Padding:** `32px 24px`.
- **Featured variant** (`.segment-card--featured`): добавляет квадратный визуал сверху (1:1) и более сильный радиальный градиент.
- **Wide variant** (`.segment-card--wide`): горизонтальный layout с эмодзи-иконкой слева, padding `22px 26px`.

#### Pricing Card (`.pricing-card`)
- **Corner Style:** 24px (`--radius-card-hero`).
- **Border:** `2px solid Workshop Terracotta` плюс шапка-полоска `6px` сверху того же цвета. Полоска — на всю ширину, не сбоку. (Боковые стрипы запрещены — см. Do's/Don'ts.)
- **Background:** card-bg `rgba(255,255,255,0.5)` плюс окружающий `pricing-glow` — диффузный radial-gradient под карточкой.
- **Shadow:** `--shadow-soft`. Это редкий компонент, который имеет тень в default-state — потому что он действительно поднят над страницей.
- **Padding:** `48px 40px`. Центрированный контент, max-width 560px.

### Inputs / Fields
- **Style:** заливка `bleached-paper`, `border: 1px solid hairline`, `border-radius: 12px`, padding `14px 16px`. Шрифт inherit.
- **Focus:** outline `2px solid var(--accent)`, offset 4px, плюс `--focus-ring` (терракотовое стекло, blur 4px, opacity 0.24).
- **Invalid** (`:user-invalid`, `[aria-invalid="true"]`): граница уходит в Stop Red, кольцо в красном стекле.
- **Success** (`.is-success`): граница в Goal Green, кольцо в зелёном стекле.

### Navigation
Лендинг — single-page без верхней навигации. Skip-link (`#main`) появляется только на focus. Sticky-mobile-CTA (z-index 100) фиксирует основную кнопку в нижней части мобильного экрана.

### Signature Components

#### Editorial Pull-Quote (`.amplifier`)
Финальная фраза-пуанта секции. Fraunces italic 500–600, `clamp(1.25rem, 2.4vw, 1.75rem)`, центрирована, с гигантской декоративной кавычкой `“` сверху (Fraunces 700 upright, `font-size: 6rem`, color terracotta opacity 0.55). Появляется в `section--warm` и подобных. Без рамок, без фона, без подложки — это типографический манифест, не контейнер.

#### Marquee Strip (`.hero__marquee-track`)
Бесконечная бегущая лента в Hero: `23 СКИЛЛА ✦ АВТОПУБЛИКАЦИЯ ✦ САМООБУЧЕНИЕ ✦ …`. Inter 700 UPPERCASE, разделитель — `✦` в Workshop Terracotta. CSS-анимация transform translateX. На `prefers-reduced-motion: reduce` — останавливается.

#### Video Polaroid (`.video-polaroid`)
Видео-блок оформлен как polaroid-фотография: белая рамка с тремя washi-скотчами по углам (`.washi--tl`, `.washi--tr`, `.washi--br`), внутри — `.video-frame` с превью. Вокруг — четыре рукодельных SVG-флористических декорации в углах секции (терракотовая флора, оливковые листья, бутоны Burnt Sienna). На взаимодействии — `video-facade__play` появляется поверх. Это самый «крафтовый» элемент сайта — он держит на себе North Star.

#### Hand-Drawn Decorations
SVG-флористика в углах video-section и section--warm — кривые штрихи Burnt Sienna `stroke-width: 2px`, бутоны Workshop Terracotta, листья Field Olive. Никаких иконок-наборов, никакого Lucide / Heroicons / Iconify в декоративных позициях. Технические иконки в кнопках — простые stroke-SVG, нарисованные inline.

#### Noise Texture (`--noise-bg`)
Едва заметный SVG-noise data-URI поверх некоторых тёмных секций. Имитирует зерно бумаги. Никогда не в чистом виде на основном фоне — только как accent-пыль на акцентных подложках.

## 6. Do's and Don'ts

Прямые гарды для агента, который будет генерировать новые экраны. Каждый «Don't» — это явное anti-reference из `PRODUCT.md`, перенесённое в визуальный план.

### Do:
- **Do** использовать `paper-cream` `#F5F0E8` как основной фон. Никогда не `#fff` для основного фона.
- **Do** ставить Fraunces italic 600 в `<em>` внутри каждого крупного заголовка — это «italic heartbeat» голоса.
- **Do** держать акцентный Workshop Terracotta на ≤10% любого экрана — CTA, italic-вставки, decor.
- **Do** делать карточки flat в покое; тень появляется на hover/focus или в одной-двух signature-карточках (pricing-card, segment-card--featured).
- **Do** менять ритм секций: чередовать `paper-cream` ↔ `paper-aged` ↔ `press-ink`, плотный список ↔ воздушная цитата.
- **Do** ограничивать длину абзаца 65–75ch через max-width контейнеры.
- **Do** обязательно ставить `--focus-ring` (терракотовое кольцо) на всех интерактивных элементах.
- **Do** использовать рукодельные SVG-декорации для атмосферных моментов (флора, точки, кривые) — это сигнатура.
- **Do** уважать `prefers-reduced-motion`: останавливать marquee, отключать scroll-reveal, сокращать transition.
- **Do** называть числа честно: «3 из 5 мест осталось», «5 минут на пост», «27 функций» — без знака восклицания.

### Don't:
- **Don't** использовать сине-фиолетовый градиент, glassmorphism-карточки, hero-метрику «большое число + стрелка вверх» — это шаблонный SaaS, прямой anti-reference из PRODUCT.md.
- **Don't** делать капс-заголовки крупнее `--fs-base`, кислотные «ОСТАЛОСЬ 2 МЕСТА!!!», красные таймеры обратного отсчёта — это инфоцыганский лендинг, anti-reference из PRODUCT.md.
- **Don't** уходить в тёмный фон с неон-розовым/фиолетовым, изометрические мокапы, бейджи «Powered by AI», скриншоты ChatGPT-интерфейса — это AI-тул общего назначения, anti-reference из PRODUCT.md.
- **Don't** добавлять мультяшные иллюстрации, радужные бейджи, скидочные стикеры, ивентовые маскоты — это школьно-обучающий курс, anti-reference из PRODUCT.md.
- **Don't** ставить `border-left` или `border-right` больше 1px как цветной акцент. Pricing-card имеет полоску `6px` СВЕРХУ — это полная рамка плюс шапка, не side-stripe.
- **Don't** использовать `background-clip: text` с градиентом для текста. Акцент через цвет, вес или italic Fraunces — не через gradient text.
- **Don't** делать Field Olive `#7A8E55` или Burnt Sienna `#8C5826` цветом UI-элементов. Эти оттенки живут только в декоративных SVG.
- **Don't** оборачивать всё в карточки. Pain-items сознательно flat-список с тонкой нижней границей. Если карточка не нужна — её нет.
- **Don't** использовать em-dash (`—`) в UI-копи и контенте. Только запятые, двоеточия, скобки, точки.
- **Don't** писать «онбординг ваших инсайтов», «прокачайте ваш контент», «эффективнее в 10 раз» и аналогичный RU-стартап-кринж. Голос Telegram-эксперта, не маркетингового брифа.
- **Don't** ставить тень в default-state на каждую карточку. Flat-by-default. Тень — это реакция, не декорация.
- **Don't** использовать `#000` или `#FFF`. Каждый нейтральный оттенок подкручен в тёплый спектр.
