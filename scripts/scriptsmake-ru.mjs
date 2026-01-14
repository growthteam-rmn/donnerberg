import fs from "node:fs";

const SRC = "public/ru/index.html"; // у тебя уже скопирован DE/EN вариант сюда
const OUT = "public/ru/index.html"; // перезапишем тем же файлом

let html = fs.readFileSync(SRC, "utf8");

// 1) lang + базовые мета (минимально)
html = html.replace(/<html\s+lang="[^"]*"/i, '<html lang="ru"');

// 2) словарь замен (важно: строки должны совпадать 1:1 с тем, что в HTML)
const R = new Map([
  // HERO / общие заголовки
  ["B2B &amp; B2C Marketingexperte", "Эксперт по маркетингу B2B и B2C"],
  ["Mit modernen Marketingtechnologien helfe ich Unternehmen, ihre Geschäftszahlen messbar zu steigern.",
   "С помощью современных маркетинговых технологий я помогаю компаниям измеримо повышать ключевые бизнес-показатели."],
  ["Praxis &amp; Cases", "Практика и кейсы"],

  // Навигация/лейблы
  ["Über mich", "Обо мне"],
  ["Fortbildung", "Повышение квалификации"],
  ["Project", "Проект"],
  ["Wann", "Когда"],
  ["Lassen Sie uns", "Давайте обсудим"],
  ["Mo-Fr 10:00-17:00 (Berlin)", "Пн–Пт 10:00–17:00 (Берлин)"],

  // Образование/курсы
  ["Lehrgang", "Курс"],
  ["Wirtschaft – Rechnungswesen und Wirtschaftsprüfung", "Экономика — бухгалтерский учёт и аудит"],
  ["Bankwesen, Finanzen und Kreditwesen", "Банковское дело, финансы и кредит"],
  ["Optimierung von Geschäftsprozessen", "Оптимизация бизнес-процессов"],
  ["Data-driven marketing", "Data-driven маркетинг"],
  ["Marketing für CEO", "Маркетинг для CEO"],
  ["HR Marketing", "HR-маркетинг"],

  // Небольшие правки, чтобы звучало естественно на русском
  ["Selbstständig &amp; Partner", "Предприниматель и партнёр"],
  ["Praxis & Cases", "Практика и кейсы"],
]);

for (const [from, to] of R.entries()) {
  html = html.split(from).join(to);
}

// Запись
fs.writeFileSync(OUT, html, "utf8");

console.log("OK: RU page updated:", OUT);
