# Test Plan — QA (freeCodeCamp: Quality Assurance and Testing with Chai)

## 1. Обхват
Express приложение „Famous Italian Explorers" — учебен проект от freeCodeCamp
curriculum-а за QA с Mocha/Chai. Включва:
- `GET /hello` — поздрав по подразбиране или по подадено `name` query параметър.
- `PUT /travellers` — връща данни за пътешественик по `surname` (JSON).
- HTML форма за търсене на пътешественик по фамилия.
- Съществуващ автоматизиран тест suite: `tests/1_unit-tests.js` (unit) и
  `tests/2_functional-tests.js` (functional, вкл. chai-http и Zombie.js).

## 2. Цели на тестването
- Всички съществуващи Mocha/Chai тестове да продължават да минават при промени.
- Нови unit/functional тестове да покриват edge cases извън текущия suite.
- Ръчна проверка на HTML формата да допълва автоматизираните Zombie.js тестове.
- Дефиниран процес за докладване и приоритизиране на открити бъгове.

## 3. Тестова среда
| Компонент | Детайли |
|---|---|
| Runtime | Node.js + Express |
| Test framework | Mocha + Chai + chai-http + Zombie.js |
| Стартиране на тестове | `npm test` (стартира `test-runner.js` / mocha suite) |
| Hosted инстанция | Render (виж `Browser.site` в `2_functional-tests.js`) |

## 4. Видове тестове
1. **Unit тестове** (`1_unit-tests.js`) — валидация на изолирани функции/логика.
2. **Functional/Integration тестове** (`2_functional-tests.js`) — HTTP заявки към `/hello`, `/travellers`.
3. **Headless browser тестове (Zombie.js)** — попълване и подаване на HTML формата.
4. **Ръчно regression тестване** — при промяна на маршрути или изгледи.

## 5. Критерии за приемане
- `npm test` минава без failed тестове преди merge.
- Нов функционалност идва с придружаващи Mocha/Chai тестове.
- HTML формата връща коректни данни за всички пътешественици в базата (Colombo, da Verrazzano, Vespucci и др.).

## 6. Изходни артефакти
- `TEST_CASES.md` — ръчни тест кейсове, допълващи автоматизирания suite.
- Bug report-и през `.github/ISSUE_TEMPLATE/bug_report.md`.
