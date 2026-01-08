![Flutter](https://img.shields.io/badge/Flutter-3.19%2B-02569B?logo=flutter&logoColor=white)
![Dart](https://img.shields.io/badge/Dart-3.0%2B-0175C2?logo=dart&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15.0%2B-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20.0%2B-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.0-000000?logo=express&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

<img width="900" height="750" alt="project-preview" src="https://github.com/user-attachments/assets/b7e687ce-2a73-48bf-90f1-fa896b808905" />

# Fullstack DevProfile & Flutter App

A comprehensive portfolio solution featuring a Resume/Portfolio website with a robust backend and a companion mobile application. This project demonstrates a full-stack architecture bridging web and mobile platforms.

## 📂 Repository Structure

```graphql
fullstack_devprofile_flutter/
├── app/                  # Helper Mobile App (Flutter)
│   ├── lib/              # Dart source code
│   └── test/             # Widget & Unit tests
├── backend/              # API Server (Node.js + Express)
│   ├── src/              # Server source code
│   └── uploads/          # Local file storage
├── frontend/             # Main Web App (Next.js 16 + React 19)
│   ├── src/              # Components, App Router, Hooks
│   └── tailwind.config.ts # Styling configuration
├── newfrontend/          # [Experimental] SPA Alternative (Vite + React 19)
├── docs/                 # Documentation & Guides
└── AGENTS.md             # LLM & Agent Guidelines
```

## 🛠 Tech Stack

### **Frontend** (Web)
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript

### **Backend** (API)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Features**: RESTful API, File Upload (Multer), CORS enabled

### **Mobile App** (Android/iOS)
- **Framework**: Flutter
- **Features**: WebView Integration, Native Native Features, Responsive Design

---

## 🚀 Getting Started

### 1. Backend Server
Running the backend is required for API features.
```bash
cd backend
npm install
npm start
# Server runs on http://localhost:4000
```

### 2. Frontend Web App
The main portfolio website.
```bash
cd frontend
npm install
npm run dev
# Web app runs on http://localhost:3000
```

### 3. Mobile Application
Requires Flutter SDK installed.
```bash
cd app
flutter pub get
flutter run
# Launches on Android Emulator or iOS Simulator
```

---

## 🧩 Key Features
- **Portfolio Showcase**: Interactive sections for blogs, projects, and profile.
- **Hybrid Mobile Experience**: Flutter app wrapping the web portfolio with native capabilities.
- **Modern UI/UX**: Utilizing the latest React & Tailwind features for a premium feel.
- **REST API**: Centralized data management for content.

## 📚 Documentation
- **[AGENTS.md](./AGENTS.md)**: Coding standards and conventions for this project.
- **Docs**: detailed guides located in the `docs/` directory.

---

> **Note**: The `newfrontend/` directory contains an experimental Vite-based SPA version of the frontend.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
