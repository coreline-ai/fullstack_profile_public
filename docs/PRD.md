# 제품 요구사항 정의서 (Product Requirements Document)

## 1. 프로젝트 개요
- **프로젝트명**: Fullstack Developer Profile & Blog Platform
- **목표**: 개발자의 전문성을 효과적으로 보여주는 포트폴리오 웹사이트와, 이를 네이티브 앱 경험으로 확장한 모바일 앱 제공.
- **타겟 유저**: 채용 담당자, 협업 제안자, 기술 정보를 찾는 방문자.

## 2. 유저 페르소나 (User Persona)
1. **Recruiter (채용 담당자)**
   - 목표: 지원자의 기술 스택과 프로젝트 경험을 빠르게 검증하고 싶음.
   - 니즈: 깔끔한 정리, 이력서 다운로드, 빠른 연락처 확인.
2. **Visitor (일반 방문자)**
   - 목표: 기술 블로그 글을 읽고 학습하거나 인사이트를 얻음.
   - 니즈: 가독성 좋은 글, 코드 하이라이팅, 빠른 검색.

## 3. 핵심 기능 요구사항 (Functional Requirements)

### 3.1 메인 홈 (Home)
- **Hero Section**: 강렬한 자기소개 텍스트와 프로필 이미지.
- **Service/Tech Stack**: 사용 가능한 기술(Lang, Framework, Tools)을 시각적으로 표현 (아이콘/배지).
- **Timeline (Career)**: 경력 및 학력을 타임라인 형태로 시각화.
- **CTA**: '프로젝트 보기' 또는 '연락하기' 등 주요 행동 유도 버튼.

### 3.2 프로젝트 (Projects)
- **리스트 뷰**: 프로젝트 카드 그리드 (썸네일, 제목, 요약, 태그).
- **필터링**: 기술 태그(React, Flutter 등) 클릭 시 필터링.
- **상세 뷰**:
  - 프로젝트 개요, 문제 해결 과정, 사용 기술, 성과.
  - 관련 링크(GitHub, Live Demo) 버튼.

### 3.3 블로그 (Blog)
- **리스트 뷰**: 최신순 정렬, 카테고리/태그 분류.
- **상세 뷰**:
  - Markdown(MDX) 렌더링.
  - 목차(Table of Contents) 사이드바 또는 플로팅.
  - 코드 스니펫 Syntax Highlighting.
  - 이전 글 / 다음 글 네비게이션.

### 3.4 문의 (Contact)
- **Contact Form**: 이름, 이메일, 메시지 입력 필드.
- **Validation**: 필수 값 체크 및 형식 유효성 검사.
- **SNS 링크**: LinkedIn, GitHub, Email 아이콘 링크 제공.

## 4. 모바일 앱 요구사항 (Flutter WebView)
- **WebView**: 웹 사이트를 전체 화면으로 로딩.
- **Navigation**:
  - 안드로이드 시스템 '뒤로가기' 버튼이 웹 히스토리 뒤로가기로 동작해야 함.
  - 앱 종료 전 "종료하시겠습니까?" 컨펌 다이얼로그 (선택사항).
- **External Links**: 블로그 글 내의 외부 링크 클릭 시, 앱 내부가 아닌 '시스템 브라우저'로 이탈하여 열려야 함.

## 5. 디자인 요구사항 (Non-Functional)
- **톤앤매너**: Bright, Airy, Sophisticated (밝고, 여백이 많으며, 세련된).
- **컬러**: Indigo/Violet을 포인트로 사용, 신뢰감 주는 White/Gray 배경.
- **반응형**: 데스크탑, 태블릿, 모바일 웹(Mobile Web) 완벽 지원.
- **인터랙션**: 버튼 Hover, 페이지 전환 시 부드러운 애니메이션 적용.
