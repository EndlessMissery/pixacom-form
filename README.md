# Pixacom Technology - Post App
[Netlify Deploy](https://chipper-tanuki-5b397c.netlify.app/)

This project was created with [Create React App](https://github.com/facebook/create-react-app).

---

## Brief Description of the App

An internal system application for managing posts. The application allows users to view, create, edit, and delete items. It is built using React and classic CSS.
The style follows the visual identity of the Pixacom website, from colors to animations and details such as border radius.
Possible further improvements are described in the "Possible Improvements" section.

---

## Complete Stack

- React
- React Hook Form
- Axios
- React Quill
- React Router DOM
- CSS (Vanilla)
- Netlify

---

## Application Features

### Application usability 
- Create – Add a post to the list with required fields (Post title and text content), using a text editor implemented with Quill
- Read – View the list of all posts (Mock API via Axios)
- Update – Edit posts in the list (both title and text content)
- Delete – Delete items (both entire posts in the list and comments in the detail view)

---

## Future improvements
- Adding language modules (e.g., i18next) to support international users
- Adding categories for specific items and enabling filtering based on these categories (the Header area is reserved for this stylistically)
- Making category selection mandatory when creating a post
- Adding comment rating functionality

---

## Installation
```bash
npm install
npm install react-router-dom axios react-hook-form react-quill
npm start
```

---

## Dependencies
- axios - API communication
- react-router-dom - Routing
- react-hook-form - Form management
- react-quill - Text editor

---

## Project Structure
```
src/
├── components/           # Reusable UI components
│   ├── fragments/        # Small UI fragments (e.g. CommentsTable, QuillEditor)
│   ├── layouts/          # Layout wrappers (e.g. Modal, Header)
│   └── *.jsx             # Main functional components (e.g. NewPost, PostList)
├── hooks/
    └── usePostsPerPage.js # Custom hook for pagination
├── api/                  
│   └── axios.js          # Axios API configuration
├── App.css               # Global styles
├── App.jsx               # Main app component
└── index.js              # App entry point
```
---

## Key Components
- PostList.jsx
  - Displays a list of posts with pagination.
  - CRUD operations for posts.
  - Key functions
    - handleCreate() - Creates a new post.
    - handleUpdate() - Updates an existing post.
    - handleDelete() - Deletes a post.
    - stripHTML() - Clear HTML tags from a string.

- NewPost.jsx
  - Form for creating a new post.
  - Uses react-quill for text editing.
  - Uses react-hook-form for form management.
    
## Fragment Components
- CommentsTable.jsx
  - Displays a table of comments for a post.
- PostFormButtons.jsx
  - Buttons for post actions (e.g. Save, Cancel).
- Loader.jsx
  - Loader component for loading states.
- PostTable.jsx
  - Table for displaying a list of posts.
- QuillEditor.jsx
  - Custom Quill editor component.

## Layout Components
- Header.jsx
  - Component for header section (e.g. logo, navigation).
- Modal.jsx
  - Modal component for displaying content in a popup.
- PageHeader.jsx
  - Component for page headers (e.g. Buttons).
- Pagination.jsx
  - Pagination component for lists.

## Hooks
- usePostsPerPage.js
  - Custom hook for pagination for different screen resolutions.

---






# Pixacom Technology - Post App
[Netlify Deploy](https://chipper-tanuki-5b397c.netlify.app/)

Tento projekt byl vytvořen pomocí [Create React App](https://github.com/facebook/create-react-app).

---

## Stručný popis aplikace

Interní systémová aplikace sloužící ke správě příspěvků. Aplikace umožňuje prohlížet, vytvářet, editovat a mazat položky. Je tvořena v Reactu a klasickém CSS. 
Stylem drží vizuální identitu Pixacom webu od barev až po animace i detaily jako radius hran.
Další možná vylepšení aplikace v odstavci "Možná vylepšení".

---

## Kompletní Stack

- React
- React Hook Form
- Axios
- React Quill
- React Router DOM
- CSS (Vanilla)
- Netlify

---

## Funkčnost aplikace

### Aplikace umožňuje
- Create – Vytvořit položku do seznamu příspěvků s povinnými atributy (Název příspěvku a textový obsah), s textovým editorem implementovaným přes Quill
- Read – Prohlížet si seznam všech položek v seznamu (Mock API přes Axios)
- Update – Editovat příspěvky v seznamu (jak název, tak i textový obsah)
- Delete – Mazat položky (jak celé příspěvky v seznamu, tak i komentáře v detailu) 

---

## Možná vylepšení
- Přidání jazykových modulů, (např. i18next) i pro zahraniční uživatele
- Přidání kategorií pro určité položky a zároveň přidat filtrování na základě této kategorie (stylově je k tomu vyhrazen prostor v Headeru)
- Výběr kategorie zavést jako povinnost při tvoření příspěvku
- Hodnocení komentářů

---

## Instalace
```bash
npm install
npm install react-router-dom axios react-hook-form react-quill
npm start
```

---

## Závislosti
- axios - Komunikace s API
- react-router-dom - Navigace
- react-hook-form - Správa formulářů
- react-quill - Editor textu

---

## Struktura projektu
```
src/
├── components/           # Znovupoužitelné UI komponenty
│   ├── fragments/        # Malé UI fragmenty (např. CommentsTable, QuillEditor)
│   ├── layouts/          # Layout wrappery (např. Modal, Header)
│   └── *.jsx
├── hooks/
    └── usePostsPerPage.js # Vlastní hook pro stránkování
├── api/
│   └── axios.js          # Konfigurace Axios API
├── App.css               # Globální styly
├── App.jsx               # Hlavní komponent aplikace
└── index.js              # Vstupní bod aplikace
```
--- 

## Klíčové komponenty
- PostList.jsx
  - Zobrazuje list příspěvků s možností stránkování.
  - CRUD operace pro příspěvky.
  - Klíčové funkce
    - handleCreate() - Vytvoří nový příspěvek.
    - handleUpdate() - Aktualizuje existující příspěvek.
    - handleDelete() - Odstraní příspěvek.
    - stripHTML() - Odstraní HTML tagy ze stringu.

- NewPost.jsx
  - Formulář pro vytvoření nového příspěvku.
  - Používá react-quill pro editaci textu.
  - Používá react-hook-form pro správu formulářů.

## Fragmentové komponenty
- CommentsTable.jsx
  - Zobrazuje tabulku komentářů pro příspěvek.
- Loader.jsx
  - Loader pro načítání obsahu.
- PostFormButtons.jsx
  - Tlačítka pro akce s příspěvkem (např. Uložit, Zrušit).
- PostTable.jsx
  - Tabulka pro zobrazení listu příspěvků.
- QuillEditor.jsx
  - Vlastní komponent Quill editoru.

## Layoutové komponenty
- Header.jsx
  - Komponenta pro hlavičku (např. logo, navigace).
- Modal.jsx
  - Komponenta pro zobrazení obsahu v popup.
- PageHeader.jsx
  - Komponenta pro hlavičky stránek (např. Tlačítka).
- Pagination.jsx
  - Komponenta pro stránkování.

## Hooky
- usePostsPerPage.js
  - Vlastní hook pro stránkování pro různé rozlišení obrazovky.

---
