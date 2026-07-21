# QA документация — QA (Famous Italian Explorers)

## Съдържание
- [`TEST_PLAN.md`](TEST_PLAN.md) — стратегия, обхват и критерии за приемане.
- [`TEST_CASES.md`](TEST_CASES.md) — ръчни тест кейсове, допълващи `tests/` suite-а.
- Bug report шаблон: [`.github/ISSUE_TEMPLATE/bug_report.md`](../.github/ISSUE_TEMPLATE/bug_report.md).

## Как да пуснеш автоматизираните тестове
```
npm install
npm test
```
Съществуващите Mocha/Chai тестове са в `tests/1_unit-tests.js` (unit) и
`tests/2_functional-tests.js` (functional + chai-http + Zombie.js).

## Как да докладваш бъг
1. Отвори нов Issue в GitHub.
2. Избери темплейта **Bug report**.
3. Посочи дали проблемът е открит автоматизирано (кой тест) или ръчно.

## Приоритети
- **P1** — критична функционалност (маршрути, данни за пътешественици).
- **P2** — важна, но не блокираща функционалност.
- **P3** — козметични/edge-case проблеми.
