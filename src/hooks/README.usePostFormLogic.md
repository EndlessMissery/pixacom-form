# usePostFormLogic

## Description

The `usePostFormLogic` hook handles the logic for managing a post form in a React app. It supports both creating and editing posts and includes loading comments and deleting them locally when in edit mode.

---

## Features
- Initializes form with `react-hook-form`
- Works in create or edit mode
- Loads comments for editing
- Deletes comments locally
- Handles submission of new or updated post
- Manages loading state

## Hook Parameters
```
| Name         | Type       | Description                                             |
|--------------|------------|---------------------------------------------------------|
| `post`       | `object`   | The post being edited (or `undefined` if creating)      |
| `isEdit`     | `boolean`  | Determines if the form is in edit mode                  |
| `onCreate`   | `function` | Callback after successful creation                      |
| `onUpdate`   | `function` | Callback after successful update                        |
| `closeModal` | `function` | Function to close the form (e.g., modal window)         |
```

## Returned Values
```
| Name                | Type       | Description                                         |
|---------------------|------------|-----------------------------------------------------|
| `control`           | `object`   | For use with `Controller` components                |
| `register`          | `function` | Register form fields                                |
| `handleSubmit`      | `function` | Submission handler wrapper                          |
| `watch`             | `function` | Watch form field values                             |
| `errors`            | `object`   | Contains validation errors                          |
| `isLoading`         | `boolean`  | Indicates loading/network activity                  |
| `comments`          | `array`    | List of loaded comments                             |
| `onSubmit`          | `function` | Handles form submission                             |
| `handleDeleteComment` | `function` | Deletes a comment locally (not on the server)      |
```

## Notes
- Comments are only deleted locally – no backend call is made.
- A fake ID is generated for new posts using `Math.random()`.
- Comments are only fetched in edit mode (`isEdit === true`).

---

## Popis

Hook `usePostFormLogic` zajišťuje logiku pro práci s formulářem příspěvku (postu) v React aplikaci. Podporuje vytváření i úpravu příspěvků a načítá komentáře pro editovaný příspěvek. Umožňuje také lokální mazání komentářů.

---

## Funkcionalita
- Iniciace a validace formuláře pomocí `react-hook-form`
- Režim "vytvořit" nebo "upravit"
- Načtení komentářů (pouze při úpravě)
- Lokální mazání komentářů
- Odeslání nového nebo upraveného příspěvku
- Řízení načítacího stavu

## Parametry hooku
```
| Název        | Typ        | Popis                                                  |
|--------------|------------|---------------------------------------------------------|
| `post`       | `object`   | Příspěvek pro úpravu (nebo `undefined` při vytváření)   |
| `isEdit`     | `boolean`  | Určuje, zda jde o úpravu (`true`) nebo vytvoření (`false`) |
| `onCreate`   | `function` | Callback po úspěšném vytvoření                         |
| `onUpdate`   | `function` | Callback po úspěšné aktualizaci                        |
| `closeModal` | `function` | Zavření formuláře (např. modálního okna)               |
```

## Návratové hodnoty
```
| Název                 | Typ        | Popis                                      |
|-----------------------|------------|---------------------------------------------|
| `control`             | `object`   | Pro použití s `Controller` komponentami     |
| `register`            | `function` | Registrace polí                             |
| `handleSubmit`        | `function` | Obalovací funkce pro submit                 |
| `watch`               | `function` | Sleduje hodnoty formuláře                   |
| `errors`              | `object`   | Obsahuje validační chyby                    |
| `isLoading`           | `boolean`  | Indikátor síťové aktivity                   |
| `comments`            | `array`    | Seznam komentářů                            |
| `onSubmit`            | `function` | Handler pro odeslání formuláře              |
| `handleDeleteComment` | `function` | Funkce pro lokální smazání komentáře        |
```

## Poznámky
- Mazání komentářů je pouze lokální – nedochází ke komunikaci se serverem.
- Při vytváření nového příspěvku se generuje falešné ID (`Math.random()`).
- Komentáře se načítají pouze při úpravě (`isEdit === true`).

---
