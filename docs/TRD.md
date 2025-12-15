# TRD — 개발자 프로파일 블로그 & 앱 확장(WebView) 플랫폼

## 1. 문서 개요
- 목적: PRD를 기반으로 실제 구현을 위한 기술적 설계 및 개발 기준 정의
- 대상: 프런트엔드 / 백엔드 / 앱 개발자
- 버전: v1.0
- 범위: Web(Next.js) + Backend(Node.js) + App(WebView)

---

## 2. 기술 스택

### 2.1 Frontend (Web)
- Framework: Next.js (App Router)
- Language: TypeScript
- Rendering:
  - React Server Components 기본
  - Client Component 최소화
- Styling:
  - Tailwind CSS
  - Modern CSS (container queries, clamp, oklch)
- Animation:
  - Framer Motion
- Content:
  - MDX 기반 콘텐츠 관리

### 2.2 Backend
- Runtime: Node.js LTS
- Framework: Express 또는 Fastify
- 데이터 관리:
  - MVP: 파일 기반(MDX)
  - 확장: PostgreSQL + Prisma ORM
- 인증:
  - 공개 서비스 (로그인 없음)
  - 관리자 로컬 관리 방식

### 2.3 App
- Framework: Flutter
- 방식: WebView 기반
- 패키지: webview_flutter
- 네비게이션: URL 기반 Deep Link

---

## 3. 전체 아키텍처

### 3.1 시스템 구조

Browser / Flutter WebView  
→ Next.js Web (SSR / SSG)  
→ Node.js API  
→ File System 또는 Database  

### 3.2 설계 원칙
- Web 단일 소스 유지
- App은 WebView 래핑만 수행
- Backend는 Headless CMS 역할

---

## 4. Frontend 상세 설계

### 4.1 라우팅 구조

/  
/projects  
/projects/[slug]  
/blog  
/blog/[slug]  
/contact  

### 4.2 디렉터리 구조

app/  
components/  
components/ui  
components/layout  
components/blog  
components/project  
content/  
content/blog  
content/projects  
lib/  
styles/  

### 4.3 반응형 전략
- Mobile First
- Container Query 기반 컴포넌트 설계
- WebView Safe Area 고려한 padding 처리

---

## 5. 콘텐츠 처리 설계 (MDX)

### 5.1 콘텐츠 저장 구조
- 모든 글과 프로젝트는 MDX 파일로 관리
- Frontmatter + 본문 구조

### 5.2 Frontmatter 필드 정의
- title: 제목
- slug: URL 식별자
- tags: 태그 배열
- summary: 리스트 요약
- publishedAt 또는 createdAt: 날짜

---

## 6. Backend API 설계

### 6.1 API 역할
- 프로젝트/블로그 데이터 제공
- Contact 메시지 저장
- 페이지 이벤트 기록

### 6.2 API 엔드포인트

GET /api/projects  
GET /api/projects/{slug}  
GET /api/blog  
GET /api/blog/{slug}  
POST /api/contact  

---

## 7. 데이터 모델 (DB 전환 대비)

### 7.1 Project
- id
- title
- slug
- summary
- tags
- content
- createdAt

### 7.2 BlogPost
- id
- title
- slug
- tags
- series (optional)
- content
- publishedAt

### 7.3 Contact
- id
- name
- email
- message
- createdAt

---

## 8. SEO & 메타데이터

### 8.1 SEO 전략
- 페이지별 메타데이터 자동 생성
- Open Graph 이미지 자동화
- JSON-LD 구조화 데이터 적용

### 8.2 검색 엔진 대응
- Sitemap 자동 생성
- robots.txt 설정

---

## 9. 성능 최적화 전략

- Static Generation 우선
- Server Components 활용
- 이미지 Lazy Loading
- 코드 스플리팅
- 폰트 최적화

---

## 10. 보안 설계

- Input Validation (Zod)
- API Rate Limiting
- CORS 제한
- 환경 변수 분리 관리

---

## 11. Flutter WebView 연동 설계

### 11.1 구조
- 단일 URL 진입
- 모든 화면은 웹에서 처리

### 11.2 고려 사항
- Safe Area 대응
- URL Intercept 확장 여지
- JavaScript Channel (추후 Native 연동 대비)

---

## 12. 개발 규칙

- TypeScript Strict Mode
- ESLint + Prettier 적용
- Conventional Commits
- 컴포넌트 단위 책임 분리

---

## 13. 배포 전략

- Frontend: Vercel
- Backend:
  - 초기: Vercel API Routes
  - 확장: 별도 Node 서버
- CI/CD:
  - GitHub Actions
- 환경:
  - dev / prod 분리

---

## 14. 로깅 & 모니터링

- 서버 로그 기록
- 페이지 조회 이벤트 저장
- 오류 발생 시 알림 연동(선택)

---

## 15. 범위 제외

- 사용자 로그인 시스템
- 실시간 채팅
- 네이티브 앱 UI 개발

---

## 16. 결론
본 TRD는 웹 중심 설계를 기반으로  
Flutter WebView 앱까지 자연스럽게 확장 가능한 구조를 목표로 하며,  
1인 개발부터 팀 확장까지 무리 없이 대응 가능한 기술 기준을 정의한다.
