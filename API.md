# API документация — QA (Famous Italian Explorers)

Спецификацията по-долу е изведена от съществуващия тест suite
(`tests/2_functional-tests.js`) — тя описва **очакваното** поведение на
API-то. Виж известния пропуск в [`ARCHITECTURE.md`](ARCHITECTURE.md)
относно липсващ root-level `server.js`.

## `GET /hello`
Връща поздрав.

**Query параметри**
| Параметър | Задължителен | Описание |
|---|---|---|
| `name` | Не | Име за персонализиран поздрав. По подразбиране: `Guest`. |

**Примери**
```
GET /hello
200 OK
"hello Guest"

GET /hello?name=xy_z
200 OK
"hello xy_z"
```

## `PUT /travellers`
Връща данни за известен италиански изследовател по фамилия.

**Body** (`application/json` или `application/x-www-form-urlencoded`)
| Поле | Тип | Описание |
|---|---|---|
| `surname` | string | Фамилия на изследователя |

**Примери**
```
PUT /travellers
Body: { "surname": "Colombo" }

200 OK
Content-Type: application/json
{ "name": "Cristoforo", "surname": "Colombo" }
```
```
PUT /travellers
Body: { "surname": "da Verrazzano" }

200 OK
{ "name": "Giovanni", "surname": "da Verrazzano" }
```

**Известни записи в базата** (според тестовете): Colombo → Cristoforo,
da Verrazzano → Giovanni. Допълнителни записи (напр. Vespucci → Amerigo)
се използват през HTML формата — виж по-долу.

## HTML форма — `GET /` (или подобен маршрут)
Форма „Famous Italian Explorers" с текстово поле `surname` и submit бутон.
При подаване, показва:
- `span#name` — собствено име
- `span#surname` — фамилия
- `span#dates` — период на живот

## Грешки
Не е дефинирано изрично поведение за невалиден/непознат `surname` в
текущите тестове — препоръчително е да се дефинира (напр. `404` или празен
обект) и да се добави тест кейс (виж `qa-docs/TEST_CASES.md`, TC-07).
