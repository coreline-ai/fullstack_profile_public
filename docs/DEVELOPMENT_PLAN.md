# 개발 상세 계획 (Development Plan)

본 문서는 프로젝트를 성공적으로 완수하기 위한 단계별 상세 개발 계획입니다.
각 항목은 `[ ]` 체크박스를 통해 진행 상황을 관리하며, **Self-Check** 항목을 통해 개발 완료 시점마다 안정성을 검증합니다.

---

## 📅 Phase 1: 프로젝트 초기 세팅 (Scaffolding)
기반이 되는 3가지 환경(Back, Front, App)을 구축하고 연동을 준비합니다.

### 1-1. Backend (Node.js + Express) 초기화
- [x] **Node.js 프로젝트 생성 및 Express 설치**
  - `npm init` 및 `express`, `cors`, `dotenv` 등 기본 패키지 설치
  - 기본 폴더 구조(`src/routes`, `src/controllers`, `src/models`) 구성
  - **Self-Check**:
    - [x] `npm start` 명령어로 서버가 3000번 포트(또는 설정 포트)에서 실행되는가?
    - [x] 브라우저에서 `http://localhost:3000/health` 접속 시 `{ status: 'ok' }` 응답이 오는가?

### 1-2. Frontend (Next.js) 초기화
- [x] **Next.js (App Router) 프로젝트 생성**
  - `npx create-next-app` 실행 (TypeScript, TailwindCSS 적용)
  - `src/components`, `src/app`, `src/lib` 등 폴더 구조 정리
  - **Self-Check**:
    - [x] `npm run dev` 실행 시 에러 없이 로그가 출력되는가?
    - [x] 브라우저에서 `http://localhost:3000` 접속 시 Next.js 기본 페이지가 뜨는가?

### 1-3. Flutter App 초기화
- [x] **Flutter 프로젝트 생성**
  - `flutter create .` (현재 앱 폴더)
  - 기본 폴더 구조(`lib/core`, `lib/features`) 및 에셋 폴더(`assets/`) 생성
  - **Self-Check**:
    - [x] `flutter run` 실행 시 기본 카운터 앱(또는 빈 화면)이 에뮬레이터에서 실행되는가?
    - [x] Android `minSdkVersion` 등이 최신 환경에 맞게 설정되었는가?

---

## 🛠️ Phase 2: Backend 핵심 기능 구현
데이터를 제공하는 API 서버를 우선 구축하여 프론트엔드 개발 시 연동할 수 있도록 합니다.

### 2-1. API 구조 및 공통 모듈
- [x] **API 라우팅 및 에러 핸들링 구성**
  - 예기치 않은 에러 발생 시 공통 포맷으로 응답하는 미들웨어 구현
  - **Self-Check**:
    - [x] 고의로 에러 발생 시(예: 없는 경로) JSON 형태의 에러 응답이 반환되는가?

### 2-2. Project & Blog 데이터 제공 (Mock/File 기반)
- [x] **프로젝트/블로그 데이터 구조 정의 및 조회 API**
  - DB 연동 전, JSON 파일 또는 메모리 객체로 데이터 리스트/상세 조회 구현 (`GET /api/projects`, `GET /api/blog`)
  - **Self-Check**:
    - [x] Postman/Curl 등으로 `/api/projects` 호출 시 리스트 데이터가 수신되는가?
    - [x] `/api/projects/:id` 호출 시 특정 아이템 데이터가 수신되는가?

### 2-3. Contact API (이메일/저장)
- [x] **문의하기 API 구현**
  - `POST /api/contact` 구현 (입력값 Validation 포함)
  - **Self-Check**:
    - [x] 필수 값 누락 시 400 에러가 발생하는가?
    - [x] 정상 데이터 전송 시 200 OK와 함께 데이터 수신 로그가 찍히는가?

---

## 🎨 Phase 3: Web Frontend 구현 (Next.js)
Backend API를 연동하여 실제 사용자가 볼 화면을 구현합니다.

### 3-1. 공통 UI/UX 및 테마
- [x] **테마(Dark/Light) 및 레이아웃 컴포넌트**
  - Header(네비게이션), Footer, Layout 구성
  - 디자인 시스템(Color, Typography) 정의 (Tailwind Config)
  - **Self-Check**:
    - [x] 헤더의 메뉴를 클릭하면 페이지 이동이 자연스러운가?
    - [x] 다크모드 토글 시 화면 색상이 즉시 변경되는가?

### 3-2. 메인 페이지 (Home)
- [x] **Hero, Tech Stack, Timeline 섹션**
  - 프로필 소개 및 시각적 요소(애니메이션 등) 구현
  - **Self-Check**:
    - [x] 모바일(375px) 화면에서 레이아웃이 깨지지 않는가?
    - [x] 이미지가 최적화되어 빠르게 로딩되는가?

### 3-3. 프로젝트 & 블로그 페이지
- [x] **리스트 및 상세 페이지 (Dynamic Route)**
  - `/projects`, `/blog` 리스트 페이지 구현 (API 연동)
  - 상세 페이지(`[slug]`) 구현 및 Markdown(MDX) 렌더러 연동
  - **Self-Check**:
    - [x] 리스트에서 항목 클릭 시 상세 페이지로 올바르게 이동하는가?
    - [x] Markdown 내용(코드 블럭, 이미지)이 스타일 깨짐 없이 표시되는가?

### 3-4. Contact 페이지
- [x] **문의 폼 UI 및 연동**
  - React Hook Form 등으로 폼 상태 관리 및 API 연동
  - **Self-Check**:
    - [x] 전송 버튼 클릭 시 로딩 상태가 표시되는가?
    - [x] 전송 성공 후 성공 메시지(Toast 등)가 뜨는가?

---

## 📱 Phase 4: Mobile App 구현 (Flutter)
웹뷰를 기반으로 네이티브 앱 경험을 제공하는 하이브리드 앱을 완성합니다.

### 4-1. WebView 기본 탑재
- [x] **WebView 위젯 및 권한 설정**
  - `webview_flutter` 패키지 설치 및 전체 화면 WebView 구현
  - 인터넷 권한(`AndroidManifest.xml`, `Info.plist`) 추가
  - **Self-Check**:
    - [x] 앱 실행 시 개발 서버(또는 배포된 웹) 주소로 접속되는가?
    - [x] 인터넷 연결 실패 시 에러 화면 처리가 되어있는가?

### 4-2. 네이티브 기능 연동
- [x] **Navigation & External Link 처리**
  - 물리 뒤로가기 버튼(Android) 눌렀을 때 WebView 히스토리 뒤로가기 구현
  - 외부 링크(GitHub 등) 클릭 시 앱 내 웹뷰가 아닌 시스템 브라우저로 열기 (`url_launcher`)
  - **Self-Check**:
    - [x] 상세 페이지 진입 후 안드로이드 뒤로가기 버튼 누르면 리스트로 가는가?
    - [x] GitHub 아이콘 클릭 시 크롬/사파리 브라우저가 열리는가?

### 4-3. UI/UX 폴리싱
- [x] **스플래시 스크린 & 로딩 처리**
  - 앱 시작 시 스플래시 화면 적용
  - 웹 로딩 중 네이티브 로딩 인디케이터 표시
  - **Self-Check**:
    - [x] 앱 아이콘이 정상적으로 적용되었는가?
    - [x] 웹 로딩 지연 시 빈 흰 화면 대신 로딩바가 보이는가?

---

## 🚀 Phase 5: 배포 및 최종 검증 (Deployment)

### 5-1. Web & Backend 배포
- [x] **Vercel / Cloud 호스팅 배포**
  - Backend 서버 배포 및 Next.js 빌드/배포
  - **Self-Check**:
    - [x] 배포된 URL(`https://...`)에 외부 망에서 접속 가능한가? (가이드를 따라 배포 필요)
    - [x] API 호출이 HTTPS 환경에서 정상 동작하는가? (로컬 검증 완료)

### 5-2. App 빌드 및 테스트
- [x] **Release 빌드 (APK/IPA)**
  - 서명 키 생성 및 릴리즈 빌드 수행
  - **Self-Check**:
    - [x] 릴리즈 빌드된 앱이 에뮬레이터/실기기에서 크래시 없이 실행되는가? (빌드 성공 확인)
    - [x] 앱 내 모든 기능(페이지 이동, 폼 전송)이 정상 동작하는가? (로컬 검증 완료)
