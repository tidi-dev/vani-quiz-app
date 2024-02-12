# Vani Heroes Quiz APP

This is the Front End

## Stacks

- Typescript [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)

- NextJS framework [https://nextjs.org/](https://nextjs.org/)

- TailwindCSS [https://tailwindcss.com/](https://tailwindcss.com/)

- Redux toolkit [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)

- js-cookie [https://www.npmjs.com/package/js-cookie](https://www.npmjs.com/package/js-cookie)

## Pre Setup

- Required **Node 16** or higher

- **Tools** are recommended

  - [**Visual Studio Code**](https://code.visualstudio.com/): Completely free and with built-in Git support and huge extension library, it’s widely used, especially by frontend developers.

## Structure

```bash
├── app #main folder for UI
│
├── redux #store management
│
├── services #service related to authen
```

```bash
# structure in app folder
├── auth
│   └── page.tsx
├── completion
│   └── page.tsx
├── components
│   ├── AuthForm.tsx
│   ├── Hint.tsx
│   ├── Input.tsx
│   ├── MiddlewareRoute.tsx
│   ├── Question.tsx
│   └── QuestionDetail.tsx
├── favicon.ico
├── globals.css
├── layout.tsx
├── page.tsx
├── quiz
│   └── page.tsx
└── types
    ├── Choice.ts
    └── Question.ts
```

## Setup

```bash

# install required packages

yarn install
```

```bash

# start app

yarn run dev

# app will run on localhost:3000
```
