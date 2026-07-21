# Архитектура — QA (Famous Italian Explorers)

## Общ преглед
Express приложение от freeCodeCamp curriculum-а „Quality Assurance and Testing
with Chai". Очакваната апликация излага:
- `GET /hello` — поздрав по подразбиране/по подадено име.
- `PUT /travellers` — данни за пътешественик по фамилия.
- HTML форма „Famous Italian Explorers" за търсене по фамилия.

Виж [`API.md`](API.md) за пълна спецификация на endpoint-ите.

## Файлова структура
| Път | Роля |
|---|---|
| `tests/1_unit-tests.js` | Mocha/Chai unit тестове |
| `tests/2_functional-tests.js` | Integration тестове (chai-http) + headless browser тестове (Zombie.js) |
| `test-runner.js` | Custom Mocha runner, събира резултатите в структуриран отчет |
| `assertion-analyser.js` | Помощна логика за анализ на асъртите в тестовете (за отчета) |
| `connection.js` | MongoDB връзка (чете `MONGO_URI` от `.env`) |
| `public/` | Статични клиентски файлове (`client.js`, `style.css`) |
| `freeCodeCamp/` | Отделен, минимален reference boilerplate (собствен `server.js`/`package.json`) — **не** е основното приложение |

## ⚠️ Известен пропуск (flag за поправка)
Тестовете в `tests/2_functional-tests.js` очакват `require('../server')` —
т.е. **root-level `server.js`**, имплементиращ `/hello`, `/travellers` и
HTML формата. Такъв файл **липсва в момента в repo-то** — само
`freeCodeCamp/server.js` съществува, но той е тривиален (само рендира `index`
изглед, без `/hello`/`/travellers` маршрути). Резултат: `npm test` няма да
намери `../server` и ще fail-не с "Cannot find module".

**Нужна поправка**: добави root-level `server.js`, който имплементира
маршрутите, описани в [`API.md`](API.md), плюс `views/` за HTML формата.

## Роли
Няма ролева/auth логика в тази апликация — публичен API за учебни цели.
