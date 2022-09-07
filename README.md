<div align="center">
<h1>🏛 quiz</h1>

<p>quiz</p>

![lastUpdated](https://img.shields.io/github/last-commit/BoBeenLee/quiz/develop)

</div>

## ✨ Features

- ⚡️ Next.js 12
- ⚛️ React 18
- 📱 React Native
- ✨ TypeScript
- 📚 Storybook - Build component driven UIs faster
- 🏗 Nx.dev - Smart, Fast and Extensible Build System
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using @quiz/ prefix (rename prefix)
- 👀 Default Open Graph — Awesome open graph generated using og
- 📏 ESLint — Find and fix problems in your code, also will auto sort your imports
- 💖 Prettier — Format your code consistently
- 👷 Github Actions — Lint, Test your code on Master Branch, Automatic Storybook Deployment

## 📂 Directory structure

    root
    ├── apps
    ├──── nextjs-app       # nextjs app
    ├── libs
    ├──── features         # all of the code for a feature and putting it in one single place (ex) todo)
    ├─────── quiz
    ├────────── apis
    ├────────── components
    ├────────── interfaces
    ├────────── hooks
    ├────────── stores
    ├────────── utils
    └── README.md

## ⚡️ Getting Started

### 1. Install dependencies

```bash
npm i --legacy-peer-deps
```

### 2. Run the development server

You can start the nextjs using this command:

```bash
npm run dev
```

## 📚 Convention

### Naming Convention

- 파일 이름 네이밍
  - 하이픈 형식 ex) z-index.ts, login-modal.tsx ...
- 컴포넌트명 네이밍
  - ex) const LoginModal = () => { ... }
- 패키지, 폴더명 단수or복수 네이밍

  - 여러파일이 들어갈거같다면 복수명으로
    ex) shared/styles, shared/libs ...
  - 고유 기능을 의미한다면 단수
    ex) app/email, app/login ...

### Commit Convention

- This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.

## Global Types Definition Setup

- tsconfig.lib.json, tsconfig.app.json files 코드를 아래와 같이 추가합니다.
  - ex) libs/shared/interfaces/tsconfig.libs.json

```
"files": [
    "../../../types/global.d.ts", <-- depth에 따라 경로 위치는 다를 수 있음
],
```

## Testing

### Store Testing

- 퀴즈 스토어 테스트
  - /lib/features/quiz/src/lib/stores/use-quiz-store/use-quiz-store.spec
- 유틸 테스트
  - /lib/features/quiz/src/lib/utils/datetime/datetime.spec

### Interaction Testing

## Deployment

- Vercel: https://quiz-bobeenlee.vercel.app/
- Storybook: https://bobeenlee.github.io/quiz/features-quiz/
