# Repository Guidelines

## 프로젝트 구조
- `app/`: Flutter 클라이언트. 진입점 `lib/main.dart`, 린트 설정 `analysis_options.yaml`, 테스트는 `test/`.
- `frontend/`: Next.js 16 + TypeScript (App Router). 주요 파일 `src/app/page.tsx`, `layout.tsx`, 전역 스타일 `globals.css`, 정적 자산 `public/`.
- `backend/`: Express API (`src/index.js`)와 `routes/api.js`, 컨트롤러, `data/mockData.js`, 오류 미들웨어. `.env`로 `PORT` 등 설정. `test_api.js`로 수동 점검 가능.
- `docs/`: 설계/요구사항/테스트 문서. 코드 변경 없이 참고 용도.

## 빌드·실행·개발 명령
- Flutter: `cd app && flutter pub get && flutter run` 실행. 품질 확인용 `flutter analyze`, 단위/위젯 테스트 `flutter test`.
- Frontend: `cd frontend && npm install && npm run dev` (기본 3000). 배포 빌드 `npm run build`, 정적 검사 `npm run lint`.
- Backend: `cd backend && npm install && ($env:PORT=4000; npm start)`로 Next dev 포트 충돌 회피. 서버 구동 중 `node test_api.js`로 프로젝트/블로그/문의 엔드포인트 스모크 테스트.

## 코딩 스타일·네이밍
- Dart: Flutter 린트 준수, 2칸 들여쓰기, `dart format .` 권장. 위젯·클래스 `PascalCase`, 변수·함수 `camelCase`.
- JS/TS: ESLint(`eslint-config-next` 기반) 사용. 컴포넌트 `PascalCase`, 훅/유틸 `camelCase`, 라우트 폴더 `kebab-case`. Tailwind 유틸을 컴포넌트 단위로 적용.
- 백엔드: 라우트는 얇게, 컨트롤러에서 로직 처리. async/await와 공통 에러 핸들러 유지. `mockData`의 슬러그/키와 응답 모델 일관성 유지.

## 테스트 가이드
- Flutter: `app/test/*_test.dart`로 명명. 상태 변경, 위젯 렌더링 커버.
- Frontend: 현재 자동 테스트 없음 → 최소 `npm run lint` 실행. 향후 `src/__tests__/`에 컴포넌트 테스트 추가 시 스냅샷은 안정 UI에 한정.
- Backend: 공식 프레임워크 미구성. 서버 실행 후 `node test_api.js`로 수동 확인. 차후 Jest+Supertest로 컨트롤러/에러 경로 커버리지 확장 권장.

## 커밋·PR 규칙
- 커밋 메시지: 간결한 Conventional Commits 프리픽스(`feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`) 권장.
- PR: 요약과 변경 이유, 실행한 명령·결과(예: `flutter test`, `npm run lint`), UI 변경 시 스크린샷, 신규/변경 환경변수(`PORT`, API base URL) 명시. 가능하면 클라이언트/백엔드 변경을 분리해 제출.

## 보안·환경 설정
- `.env`는 커밋 금지. 로컬 기본값: `PORT=4000`(백엔드), Next dev는 3000. CORS/도메인 변경 시 백엔드 `cors` 설정과 프런트 API 베이스 URL을 함께 업데이트.
