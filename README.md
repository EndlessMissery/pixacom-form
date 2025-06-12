# Pixacom Technology - Post App
[Netlify Deploy](https://chipper-tanuki-5b397c.netlify.app/)

This project was created with [Create React App](https://github.com/facebook/create-react-app).

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
    
### Fragment Components
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

### Fragmentové komponenty
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
