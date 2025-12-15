# 프로젝트 분석 요약

## 개요
이 프로젝트는 **Next.js** 프론트엔드와 **Express.js** 백엔드로 구성된 풀스택 개발자 포트폴리오 애플리케이션입니다. 프로젝트, 블로그 포스트, 경력 타임라인, 연락처 양식 등의 섹션으로 구성된 동적 포트폴리오를 제공하며, 모든 데이터는 백엔드 API를 통해 관리됩니다.

## 프론트엔드 (Client-Side)
**경로**: `frontend/`
\n**기술 스택**:
-   **프레임워크**: Next.js 15+ (App Router)
-   **언어**: TypeScript
-   **스타일링**: Tailwind CSS 4, Radix UI
-   **상태/데이터**: 로컬 폴백(fallback) 데이터를 지원하는 서버 컴포넌트 기반 데이터 페칭.

**주요 기능**:
-   **홈 페이지**: Hero(소개), 기술 스택, 경력, 블로그, 프로젝트 섹션을 한 페이지에 구성.
-   **동적 데이터**: 백엔드 API로부터 `Projects`, `BlogPosts`, `TimelineItems` 데이터를 가져옴.
-   **폴백 메커니즘**: API 장애 시에도 포트폴리오가 정상적으로 보이도록 정적 폴백 데이터를 자동으로 서빙.
-   **관리자 영역**: `admin` 디렉토리가 존재하며, 콘텐츠 관리를 위한 CMS 인터페이스가 포함된 것으로 추정됨.

## 백엔드 (Server-Side)
**경로**: `backend/`
\n**기술 스택**:
-   **프레임워크**: Express.js
-   **언어**: JavaScript (Node.js)
-   **의존성**: `cors`, `dotenv`, `multer` (파일 업로드), `uuid`.

**API 엔드포인트**:
-   **프로젝트 (Projects)**: `GET`, `POST`, `PUT` `/projects` (포트폴리오 프로젝트 CRUD).
-   **블로그 (Blog)**: `GET`, `POST`, `PUT` `/blog` (블로그 포스트 CRUD).
-   **타임라인 (Timeline)**: `GET`, `POST`, `PUT`, `DELETE` `/timeline` (경력 사항 CRUD).
-   **연락처 (Contact)**: `POST` `/contact` (문의 양식 제출).
-   **업로드 (Upload)**: `POST` `/upload` (이미지 파일 업로드).

**아키텍처**:
-   **MVC 패턴**: `routes` (API 정의), `controllers` (비즈니스 로직), `models`/`data` (데이터 저장)로 역할 분리.
-   **저장소**: `package.json`에 별도의 DB 드라이버가 없는 것으로 보아 로컬 JSON 파일이나 인메모리 저장소를 사용하는 것으로 보임 (포트폴리오 용도로 가볍게 구성됨).

## 연동 및 구조
-   **통신**: 프론트엔드는 `http://localhost:4000/api` (환경 변수 `NEXT_PUBLIC_API_BASE_URL`로 설정 가능)에 위치한 REST API와 통신합니다.
-   **안정성**: 백엔드 서버가 다운되더라도 프론트엔드가 멈추지 않고 폴백 데이터를 보여주도록 설계되어 있어 안정적인 포트폴리오 열람이 가능합니다.
