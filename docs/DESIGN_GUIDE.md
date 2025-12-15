# 디자인 가이드 (Design Guide)

## 1. 디자인 원칙 (Design Principles)
본 프로젝트의 디자인은 **"Bright, Airy & Sophisticated"**를 지향합니다.
사용자에게 신뢰감을 주는 밝은 배경과, 전문성을 강조하는 세련된 포인트 컬러를 사용하여 현대적인 감각을 전달합니다.

### 핵심 키워드
- **Clean (깔끔함)**: 불필요한 장식을 배제하고 여백을 충분히 활용합니다.
- **Vibrant (생동감)**: 밝은 배경 위에서 콘텐츠가 명확히 돋보이도록 합니다.
- **Premium (고급스러움)**: 미세한 그림자(Soft Shadow)와 부드러운 인터랙션을 통해 깊이감을 줍니다.

---

## 2. 컬러 시스템 (Color System)

### Primary Palette (브랜드 컬러)
세련되고 전문적인 느낌을 주는 인디고(Indigo)와 바이올렛(Violet) 계열을 사용합니다.
- **Primary Main**: `#6366F1` (Indigo 500) - 주요 버튼, 활성 상태, 강조 텍스트
- **Primary Light**: `#E0E7FF` (Indigo 100) - 배경 틴트, 호버링 효과
- **Primary Dark**: `#4338CA` (Indigo 700) - 클릭 상태, 강한 강조

### Secondary Palette (보조 컬러)
- **Secondary**: `#EC4899` (Pink 500) - 생동감을 주는 포인트 (CTA 버튼, 배지 등)
- **Success**: `#10B981` (Emerald 500) - 완료, 성공 상태
- **Warning**: `#F59E0B` (Amber 500) - 주의 필요
- **Error**: `#EF4444` (Red 500) - 오류, 삭제

### Neutral & Background (배경 및 텍스트)
밝고 깨끗한 느낌을 위해 Pure White와 아주 옅은 회색을 주로 사용합니다.
- **Background (Page)**: `#F9FAFB` (Cool Gray 50) - 전체 페이지 배경 (눈이 편안한 미색)
- **Surface (Card/Modal)**: `#FFFFFF` (White) - 카드, 모달, 패널 배경
- **Text Strong**: `#111827` (Gray 900) - 제목, 주요 본문
- **Text Normal**: `#4B5563` (Gray 600) - 부가 설명, 본문
- **Text Muted**: `#9CA3AF` (Gray 400) - 비활성, 플레이스홀더
- **Border**: `#E5E7EB` (Gray 200) - 디바이더, 입력창 테두리

---

## 3. 타이포그래피 (Typography)

가독성이 뛰어나고 현대적인 **Sans-Serif** 폰트를 사용합니다.
- **Font Family**: `Inter` (영문), `Pretendard` (국문) - 시스템 폰트 우선 적용 (`-apple-system`, `BlinkMacSystemFont` 등)

### Scale
- **Display**: `Bold / 48px` (Line-height: 1.2) - 메인 히어로 타이틀
- **H1**: `Bold / 32px` (Line-height: 1.3) - 페이지 제목
- **H2**: `SemiBold / 24px` (Line-height: 1.4) - 섹션 제목
- **H3**: `SemiBold / 20px` (Line-height: 1.4) - 카드 제목
- **Body 1**: `Regular / 16px` (Line-height: 1.6) - 주요 본문
- **Body 2**: `Regular / 14px` (Line-height: 1.6) - 보조 텍스트
- **Caption**: `Medium / 12px` (Line-height: 1.5) - 라벨, 설명 주석

---

## 4. UI 컴포넌트 스타일 (Component Style)

### Buttons (버튼)
- **Shape**: `Border-radius: 8px` (부드러운 사각형)
- **Primary Button**: 배경 Primary Main, 텍스트 White, 미세한 Shadow
- **Secondary Button**: 배경 White, 테두리 Primary Main, 텍스트 Primary Main
- **Text Button**: 배경 투명, 텍스트 Gray 600 (Hover시 Primary)

### Cards (카드)
- **Style**: 심플하고 떠있는 느낌 (Elevated)
- **Background**: `#FFFFFF`
- **Border-radius**: `16px`
- **Shadow**: `0 4px 6px -1px rgba(0, 0, 0, 0.05)` (매우 부드러운 그림자)
- **Border**: 없음 (또는 아주 옅은 `#F3F4F6` 1px)
- **Interaction**: Hover 시 `Create Y축 -4px` 이동 및 Shadow 증가

### Inputs (입력 필드)
- **Background**: `#F9FAFB` (Gray 50)
- **Border**: `#E5E7EB` (Gray 200) 1px
- **Radius**: `8px`
- **Focus**: Border Primary Main 변경, Ring(Primary Light 20%) 효과

---

## 5. 레이아웃 및 여백 (Layout & Spacing)

### Grid System
- **Desktop**: 12 Column, Max-width 1200px
- **Tablet**: 8 Column
- **Mobile**: 4 Column, Margin 16px~20px

### Spacing Scale (8pt Grid)
- **XS (4px)**: 아주 좁은 간격
- **S (8px)**: 아이콘과 텍스트 사이
- **M (16px)**: 컴포넌트 내부 요소 간
- **L (24px)**: 섹션 내부 그룹 간
- **XL (32px)**: 섹션과 섹션 사이 (모바일)
- **2XL (64px)**: 큰 섹션 구분 (데스크탑)

---

## 6. 에셋 및 아이콘 (Assets & Icons)
- **Icons**: `Lucide` 또는 `Heroicons` (Stroke width 1.5~2px, Rounded cap/join)
- **Images**:
  - 모서리는 항상 `Border-radius` 적용 (최소 8px)
  - 밝고 채도가 적당한 이미지 사용 (어둡고 칙칙한 이미지 지양)
