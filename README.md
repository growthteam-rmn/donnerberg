# Donnerberg landing — migration scaffold (from Tilda)

## Что внутри

- **Vite**-проект (современный dev/build), при этом страница остаётся **чистым HTML/CSS/JS**.
- Локальные копии ресурсов, которые уже были выгружены из Tilda:
  - `public/assets/tilda/*.css`
  - `public/assets/tilda/*.js`
  - `public/assets/tilda/logo.png`

## Как получить 1:1 (важно)

Из-за ограничений доступа к домену `*.tilda.ws` в среде сборки, исходный HTML автоматически не скачан.
Но у вас он уже сохранён в Google Doc (экспортированный HTML). Поэтому делаем так:

1. Откройте `index.html`.
2. Найдите блок:

   ```html
   <div id="allrecords" class="t-records" data-hook="blocks-collection">
     <!-- ====== PASTE EXPORTED TILDA HTML HERE (inside allrecords) ====== -->
     ...
   </div>
   ```

3. Полностью замените содержимое внутри `#allrecords` на экспортированный HTML страницы (только контент внутри `<body>`, без `<html>`, `<head>`).
4. Пройдитесь по путям:
   - если в HTML встречаются ссылки вида `https://static.tildacdn.ink/.../tilda-*.min.js|css` — **по возможности** замените на локальные:
     - `./assets/tilda/tilda-...`
   - изображения/фоны можно оставить на CDN (это сохранит 1:1), либо выгрузить в `public/assets/img/` и заменить пути.

## Запуск

```bash
npm i
npm run dev
```

Сборка:

```bash
npm run build
npm run preview
```

## Структура

- `index.html` — основная страница
- `public/assets/tilda/` — локальные ресурсы Tilda
- `src/main.js` — резерв под вашу будущую логику

