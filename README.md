# Playwright e2e test – saucedemo.com

## 🧪 O projektu

Tento projekt implementuje automatizované testy pro e-shop [saucedemo.com](https://www.saucedemo.com) pomocí Playwrightu a TypeScriptu. Pokrývá login, nákupní proces a validace přihlášení s různými uživateli.

## 📁 Struktura projektu

```
.
├── pages/              # Page Object Model třídy
├── tests/              # Testovací scénáře
├── data/               # Testovací data (uživatelé)
├── playwright.config.ts
└── README.md
```

## 🔨 Spuštění testů

```bash
npm install
npx playwright test
```

Prohlédnutí výsledků:

```bash
npx playwright show-report
```

## ✅ Implementované scénáře

### 1. Kompletní objednávka

- Přihlášení jako `standard_user`
- Seřazení produktů od nejdražšího
- Přidání nejdražšího produktu do košíku
- Vyplnění dodacích údajů
- Ověření potvrzení objednávky

### 2. Data-driven login test

- Validní a nevalidní kombinace uživatelských údajů (např. locked user, špatné heslo, atd.)

## 🔧 Použité techniky a praktiky

- ✅ Page Object Model (každá stránka má vlastní třídu)
- ✅ TypeScript
- ✅ Kombinace lokátorů (Playwright API + XPath)
- ✅ Retry mechanismus (`retries: 3` v configu)
- ✅ Screenshoty při selhání
- ✅ Paralelizace testů (config pro Chromium & Firefox)
- ✅ Testovací data v externím JSON souboru

## 📌 Důvod volby POM

Page Object Model umožňuje:

- oddělit testovací logiku od implementace UI
- zvýšit opakovanou použitelnost a čitelnost kódu
- snazší údržbu při změně UI

## 📂 Práce s daty

Data jsou uložena ve formátu JSON v souboru `data/users.json` a načítána do login testu pomocí `import users from ...`. To umožňuje snadné přidávání nebo změnu uživatelů bez úpravy testů.
