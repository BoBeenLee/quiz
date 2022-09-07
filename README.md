<div align="center">
<h1>Quiz</h1>

<p>Simple Quiz App</p>

![lastUpdated](https://img.shields.io/github/last-commit/BoBeenLee/quiz/develop)

</div>

#### Vercel: https://quiz-bobeenlee.vercel.app/

#### Storybook: https://bobeenlee.github.io/quiz/features-quiz/

<br/>

## ✨ Features

- ⚡️ Next.js 12
- ⚛️ React 18
- ✨ Material UI
- 👀 TypeScript
- 📚 Storybook - Build component driven UIs faster
- 🏗 Nx.dev - Smart, Fast and Extensible Build System
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using @quiz/ prefix (rename prefix)
- 📏 ESLint — Find and fix problems in your code, also will auto sort your imports
- 💖 Prettier — Format your code consistently
- 👷 Github Actions — Lint, Test your code on Master Branch, Automatic Storybook Deployment
- 📗 State Management - Zustand

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

## Testing

### Unit Testing

- 유틸 테스트
  - /lib/features/quiz/src/lib/utils/datetime/datetime.spec

### Store Testing

- 퀴즈 스토어 테스트
  - /lib/features/quiz/src/lib/stores/use-quiz-store/use-quiz-store.spec

### Interaction Testing

- 퀴즈 문제 작성 테스트
  - 로컬 스토리북 실행 후

```
npm run features-quiz:storybook
```

- http://localhost:4400/?path=/story/quiz--primary Addon 패널 영역해서 확인하실 수 있습니다.
  <img width="300" alt="Screen Shot 2022-09-07 at 9 12 44 PM" src="https://user-images.githubusercontent.com/1489321/188875868-973d7fea-fee0-45cc-91f4-593429b27003.png">

## Deployment

- Vercel: https://quiz-bobeenlee.vercel.app/
  - Vercel Dashboard develop브랜치 기준 자동 배포
- Storybook: https://bobeenlee.github.io/quiz/features-quiz/
  - Github Action 배포 스크립트를 통한 gh-pages 배포
