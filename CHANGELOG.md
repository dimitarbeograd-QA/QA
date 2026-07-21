# Changelog

Форматът следва приблизително [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]
### Added
- Пълна QA документация (`qa-docs/TEST_PLAN.md`, `TEST_CASES.md`) и bug report темплейт.
- Технически документи: `README.md`, `ARCHITECTURE.md`, `SECURITY.md`, `CONTRIBUTING.md`, `API.md`.
- Root-level `package.json` за да работи `npm install`/`npm test`.
- GitHub Actions workflow, изпълняващ `npm test` при push/PR.

### Security
- Премахнат committed `.env` от tracking; добавени `.gitignore` и `sample.env`.
  **Важно**: старата парола в git историята трябва да бъде сменена в MongoDB Atlas.

### Known Issues
- `tests/2_functional-tests.js` очаква root-level `server.js`, който все още липсва — виж `ARCHITECTURE.md`.

## Преди този журнал
По-ранните промени не са документирани тук — виж `git log` за пълна история.
