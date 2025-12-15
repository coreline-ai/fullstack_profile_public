# 기술 스택 및 Docker 배포 가이드

## 1. 기술 스택 (Tech Stack)

이 프로젝트는 최신 웹 기술을 사용하여 성능과 개발 경험을 극대화하도록 구성되었습니다.

### Frontend (Client-Side)
*   **Framework**: Next.js 16.0.10 (App Router, Turbopack)
*   **Language**: TypeScript 5
*   **Library**: React 19.2.1
*   **Styling**:
    *   Tailwind CSS 4 (Utility-first CSS)
    *   Radix UI (Headless accessible components)
    *   Lucide React (Icons)
*   **Animation**: Framer Motion
*   **Editor**: @uiw/react-md-editor (Markdown content editing)

### Backend (Server-Side)
*   **Runtime**: Node.js (v20+ 권장)
*   **Framework**: Express.js 5.2.1
*   **Utilities**:
    *   `multer`: 파일 업로드 처리
    *   `cors`: Cross-Origin Resource Sharing 설정
    *   `dotenv`: 환경 변수 관리
    *   `uuid`: 고유 ID 생성

### Infrastructure & DevOps
*   **Containerization**: Docker
*   **Orchestration**: Docker Compose

---

## 2. Docker 배포 가이드 (Deployment Guide)

Docker를 사용하여 프론트엔드와 백엔드를 손쉽게 실행하고 배포할 수 있습니다.

### 사전 준비 사항
*   [Docker Desktop](https://www.docker.com/products/docker-desktop/)이 설치되어 있어야 합니다.

### 파일 구조
이미 프로젝트 루트에 다음과 같은 Docker 관련 설정 파일들이 생성되어 있습니다:
*   `backend/Dockerfile`: 백엔드 이미지 빌드 설정
*   `frontend/Dockerfile`: 프론트엔드 이미지 빌드 설정
*   `docker-compose.yml`: 두 서비스를 한꺼번에 실행하기 위한 통합 설정

### 실행 방법 (Run)

1.  **터미널 열기**: 프로젝트 루트 디렉토리(`fullstack_devprofile_flutter`)에서 터미널을 엽니다.
2.  **컨테이너 빌드 및 실행**: 다음 명령어를 입력합니다.
    ```bash
    docker-compose up --build
    ```
    *   `--build`: 이미지가 없거나 변경사항이 있을 때 새로 빌드합니다.
    *   처음 실행 시 빌드에 시간이 조금 걸릴 수 있습니다.

3.  **접속 확인**:
    *   **Frontend**: 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속
    *   **Backend**: API는 [http://localhost:4000](http://localhost:4000)에서 실행됩니다.

### 실행 종료 (Stop)
터미널에서 `Ctrl + C`를 눌러 중지하거나, 다른 터미널 창에서 다음 명령어를 실행합니다.
```bash
docker-compose down
```

### 트러블슈팅 (Troubleshooting)
*   **포트 충돌**: 이미 3000번이나 4000번 포트를 다른 프로그램이 사용 중이라면 실행에 실패할 수 있습니다. 해당 프로세스를 종료하거나 `docker-compose.yml`에서 포트 매핑을 변경하세요.
*   **데이터 유지**: 백엔드의 `uploads` 폴더는 로컬과 볼륨으로 연결되어 있어(`backend/uploads`), 컨테이너를 재시작해도 업로드된 파일이 유지됩니다.

---

## 3. 자주 묻는 질문 (FAQ)

### Q1. `docker-compose up --build`는 웹서버 없이도 가능한가요?
**네, 가능합니다.**
*   Docker 컨테이너 **안에** 이미 웹 서버 구동 환경(Node.js 등)이 모두 포함되어 있습니다.
*   호스트 컴퓨터(사용자 PC)에 Apache나 Nginx 같은 별도의 웹 서버를 설치할 필요가 없습니다.
*   단지 Docker만 설치되어 있으면, 컨테이너가 스스로 웹 서버 역할을 하여 3000번, 4000번 포트로 요청을 처리합니다.

### Q2. 부팅 시마다 자동으로 실행하려면 어떻게 해야 하나요?
**`restart` 정책을 사용합니다.**
*   `docker-compose.yml` 파일에 `restart: always` 설정을 추가했습니다 (이미 업데이트됨).
*   이 설정이 있으면:
    1.  컴퓨터가 재부팅되어 Docker 데몬이 켜지면, 컨테이너도 **자동으로 시작**됩니다.
    2.  프로그램이 예기치 않게 종료되어도 **자동으로 재시작**합니다.
*   **주의**: 처음 한 번은 `docker-compose up -d` (백그라운드 모드)로 실행해 두어야 합니다.
    ```bash
    docker-compose up -d --build
    ```

### Q3. 현재 로컬(Windows) 터미널 실행과 Docker 실행의 차이는 무엇인가요?
*   **현재 상태 (개발 모드)**: 사용자가 터미널에서 `npm start` (백엔드)와 `npm run dev` (프론트엔드)를 입력해서 실행 중입니다.
    *   이것은 Docker가 아니라, **사용자 PC에 설치된 Node.js**를 직접 사용하여 프로그램을 돌리는 것입니다.
*   **Docker 실행**: `docker-compose up`을 하면, 내 PC의 환경과 무관하게 **컨테이너**라는 격리된 가상 공간 안에서 Node.js와 프로그램이 돌아갑니다.
    *   서버에 배포할 때는 이 방식이 훨씬 안정적이고 관리가 편합니다.

### Q4. Docker 없이 실행할 때 프론트엔드(Next.js)는 어떻게 실행되나요?
*   `npm run dev` 명령어를 입력하면, 프로젝트 폴더(`frontend/node_modules`) 안에 설치된 **Next.js 개발 서버**가 실행됩니다.
*   이 Next.js 개발 서버도 내부적으로는 **Node.js** 위에서 돌아가는 하나의 프로그램입니다.
*   즉, Docker 없이도 Node.js만 깔려 있다면 `npm run` 명령어로 언제든 실행 가능합니다.

### Q5. `docker-compose` 명령어는 어디서 실행해야 하나요?
**반드시 `docker-compose.yml` 파일이 있는 위치에서 실행해야 합니다.**
*   이 프로젝트의 경우 최상위 폴더인 `fullstack_devprofile_flutter` 폴더입니다.
*   터미널에서 `ls` (또는 윈도우 `dir`)를 쳤을 때 `docker-compose.yml` 파일이 보여야 합니다.
*   `backend`나 `frontend` 폴더 안으로 들어가서 실행하면 에러가 납니다.

### Q6. 패키지(라이브러리)들은 자동으로 설치되고 포함되나요?
**네, 맞습니다! 전적으로 자동입니다.**
*   `docker-compose up --build`를 하면 Docker가 이미지를 새로 굽습니다(Build).
*   이때 `Dockerfile` 안에 적혀 있는 `RUN npm install` 명령어가 실행되면서, `package.json`에 명시된 모든 라이브러리를 다운로드 받아 컨테이너 안에 꽁꽁 싸맵니다.
*   따라서, 배포할 서버에는 Node.js나 라이브러리를 따로 설치할 필요가 전혀 없습니다. Docker만 있으면 됩니다.

### Q7. 설치될 패키지 정보는 어디에 있나요?
**각 폴더(frontend, backend) 안의 `package.json` 파일에 있습니다.**
*   이 파일들은 일종의 **주문서(영수증)** 역할을 합니다.
*   `dependencies` 항목에 적힌 라이브러리 목록을 Docker가 보고 "아, 이게 필요하구나" 하고 똑같이 설치해 줍니다.
*   직접 열어서 확인해 보세요:
    *   `backend/package.json`: express, cors 등 백엔드용 패키지
    *   `frontend/package.json`: next, react, tailwindcss 등 프론트엔드용 패키지

### Q8. `sudo systemctl enable docker` 명령어는 어디서 실행하나요?
**반드시 "리모트 리눅스 서버"의 터미널에서 실행해야 합니다.**
*   사용자님의 PC(윈도우) 터미널이 아닙니다!
*   SSH 등으로 접속한 **서버의 검은 화면(터미널)**에서 입력해야 합니다.
*   이 명령어는 리눅스 운영체제에게 "컴퓨터 켤 때 Docker도 같이 켜줘"라고 부탁하는 명령어이기 때문입니다.

---

## 4. 리모트 리눅스 서버 배포 방법 (Remote Server Deployment)

만들어진 Docker 환경을 실제 운영 중인 리눅스 서버(AWS EC2, VPS 등)에 배포하는 방법입니다.

### 4.1 사전 준비 (Prerequisites)
리눅스 서버에 접속하여 다음 프로그램들을 설치해야 합니다.
```bash
# Docker 설치
sudo apt-get update
sudo apt-get install docker.io -y

# Docker Compose 설치
sudo apt-get install docker-compose -y
```

### 4.2 파일 전송 (File Transfer)
프로젝트 소스 코드를 서버로 옮겨야 합니다. 두 가지 방법 중 편한 것을 선택하세요.

**방법 A: Git 사용 (권장)**
1.  이 프로젝트를 GitHub나 GitLab에 올립니다.
2.  서버에서 `git clone`으로 내려받습니다.
    ```bash
    git clone https://github.com/your-username/repo-name.git
    cd repo-name
    ```

**방법 B: SCP/FTP 사용 (직접 전송)**
Git을 쓰지 않는다면 `scp` 명령어나 FileZilla 등을 이용해 프로젝트 폴더를 통째로 서버로 복사합니다.

**Windows PowerShell 예시:**
```powershell
# 프로젝트 상위 폴더(Riverpod_status_provider)에서 실행한다고 가정
# 'fullstack_devprofile_flutter' 폴더 전체를 서버의 홈 디렉토리로 복사
scp -r .\fullstack_devprofile_flutter user@your-server-ip:~/fullstack_devprofile_flutter
```

### 4.3 서버에서 실행
파일이 전송되었다면, 서버 터미널에서 해당 폴더로 이동하여 실행합니다.

1.  프로젝트 폴더로 이동:
    ```bash
    cd ~/fullstack_devprofile_flutter
    ```
2.  Docker Compose 실행 (백그라운드 모드):
    ```bash
    # 처음 실행 시 이미지를 빌드합니다
    sudo docker-compose up -d --build
    ```

이제 브라우저에서 `http://서버-IP-주소:3000`으로 접속하면, 배포된 **AlexDev 포트폴리오** 사이트를 볼 수 있습니다.
(AWS EC2의 경우 '보안 그룹' 설정에서 3000번(Frontend), 4000번(Backend) 포트가 허용되어 있는지 꼭 확인하세요.)

### 4.4 서버 부팅 시 자동 실행 (Auto-Start on Boot)
서버를 재부팅해도 서비스가 자동으로 살아나게 하려면 두 가지가 필요합니다.

**1. Docker 데몬 자동 실행 설정**
리눅스 서버가 켜질 때 Docker 프로그램 자체가 실행되도록 설정해야 합니다. (최초 1회만 실행하면 됩니다)
```bash
sudo systemctl enable docker
sudo systemctl start docker
```

**2. 컨테이너 자동 실행 확인**
이미 `docker-compose.yml` 파일에 `restart: always` 설정이 되어 있습니다.
따라서 **1번(Docker 데몬 설정)**만 되어 있다면, 서버가 재부팅될 때 컨테이너들도 자동으로 다시 시작됩니다. 별도의 추가 설정은 필요 없습니다.
