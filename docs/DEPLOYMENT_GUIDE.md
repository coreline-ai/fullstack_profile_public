# 배포 및 설치 가이드 (Deployment Guide)

## 1. Web Frontend (Next.js) 배포
Next.js 프로젝트는 **Vercel** 배포를 권장합니다.

### Vercel 배포 순서
1. GitHub 저장소에 코드 Push
2. Vercel 대시보드에서 `Add New Project` -> 저장소 Import
3. **Framework Preset**: Next.js
4. **Root Directory**: `frontend` 선택
5. **Environment Variables** 설정:
   - `NEXT_PUBLIC_API_URL`: 배포된 Backend URL (예: `https://my-backend.onrender.com/api`)
6. `Deploy` 클릭

## 2. Backend (Node.js) 배포
Node.js Express 서버는 **Render** 또는 **Heroku**를 권장합니다.
(Vercel도 가능하나, Serverless function 제약이 있을 수 있음)

### Render.com 배포 순서
1. Render 대시보드 -> `New Web Service`
2. GitHub 저장소 연동
3. **Root Directory**: `backend`
4. **Build Command**: `npm install`
5. **Start Command**: `npm start`
6. **Environment Variables**:
   - `PORT`: 3000 (또는 플랫폼 권장 포트)

## 3. Mobile App (Android APK) 설치
생성된 APK 파일을 안드로이드 기기에 전송하여 수동으로 설치할 수 있습니다.

### APK 파일 위치
`app/build/app/outputs/flutter-apk/app-release.apk`

### 설치 방법
1. 위 경로의 `app-release.apk` 파일을 USB 또는 클라우드(Google Drive 등)를 통해 폰으로 전송
2. 파일 탐색기에서 APK 파일 터치 -> 설치 (출처를 알 수 없는 앱 허용 필요)
