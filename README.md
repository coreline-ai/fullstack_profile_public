![Flutter](https://img.shields.io/badge/Flutter-3.19%2B-02569B?logo=flutter&logoColor=white)
![Dart](https://img.shields.io/badge/Dart-3.0%2B-0175C2?logo=dart&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15.0%2B-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20.0%2B-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.0-000000?logo=express&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

# Fullstack DevProfile & Flutter App (IOS, Android)

이력서/포트폴리오 웹사이트와, 이를 보조하는 모바일 애플리케이션, 그리고 강력한 백엔드를 갖춘 포괄적인 포트폴리오 솔루션입니다. 이 프로젝트는 웹과 모바일 플랫폼을 잇는 풀스택 아키텍처를 보여줍니다.

## 📂 저장소 구조

```graphql
fullstack_devprofile_flutter/
├── app/                  # 모바일 앱 (Flutter)
│   ├── lib/              # Dart 소스 코드
│   └── test/             # 위젯 및 단위 테스트
├── backend/              # API 서버 (Node.js + Express)
│   ├── src/              # 서버 소스 코드
│   └── uploads/          # 로컬 파일 저장소
├── frontend/             # 메인 웹 앱 (Next.js 16 + React 19)
│   ├── src/              # 컴포넌트, 앱 라우터, Hooks
│   └── tailwind.config.ts # 스타일 설정
├── newfrontend/          # [실험적] SPA 대안 (Vite + React 19)
├── docs/                 # 문서 및 가이드
└── AGENTS.md             # LLM 및 에이전트 가이드라인
```

## 🛠 기술 스택

### **프론트엔드** (웹)
- **프레임워크**: [Next.js 16](https://nextjs.org/) (App Router)
- **라이브러리**: React 19
- **스타일링**: Tailwind CSS v4
- **언어**: TypeScript

### **백엔드** (API)
- **런타임**: Node.js
- **프레임워크**: Express.js
- **기능**: RESTful API, 파일 업로드 (Multer), CORS 활성화

### **모바일 앱** (Android/iOS)
- **프레임워크**: Flutter
- **기능**: 웹뷰 통합, 네이티브 기능, 반응형 디자인

---

## 🚀 시작하기

### 1. 백엔드 서버
API 기능을 사용하려면 백엔드 실행이 필요합니다.
```bash
cd backend
npm install
npm start
# 서버는 http://localhost:4000 에서 실행됩니다.
```

### 2. 프론트엔드 웹 앱
메인 포트폴리오 웹사이트입니다.
```bash
cd frontend
npm install
npm run dev
# 웹 앱은 http://localhost:3000 에서 실행됩니다.
```

### 3. 모바일 애플리케이션
Flutter SDK 설치가 필요합니다.
```bash
cd app
flutter pub get
flutter run
# Android 에뮬레이터 또는 iOS 시뮬레이터에서 실행됩니다.
```

---

## 🧩 주요 기능
- **포트폴리오 쇼케이스**: 블로그, 프로젝트, 프로필을 위한 인터랙티브 섹션.
- **하이브리드 모바일 경험**: 네이티브 기능을 갖춘 웹 포트폴리오를 감싸는 Flutter 앱.
- **최신 UI/UX**: 프리미엄 느낌을 위해 최신 React 및 Tailwind 기능 활용.
- **REST API**: 콘텐츠를 위한 중앙 집중식 데이터 관리.

## 📚 문서
- **[AGENTS.md](./AGENTS.md)**: 이 프로젝트의 코딩 표준 및 컨벤션.
- **문서**: `docs/` 디렉토리에 위치한 상세 가이드.

---

> **참고**: `newfrontend/` 디렉토리는 실험적인 Vite 기반 SPA 버전의 프론트엔드를 포함하고 있습니다.

## 📄 라이선스
이 프로젝트는 MIT 라이선스 하에 배포됩니다 - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
