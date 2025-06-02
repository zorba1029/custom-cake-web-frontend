# Custom Cake Front

커스텀 케이크 주문 웹 애플리케이션의 프론트엔드 프로젝트입니다.

## 🛠 기술 스택

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.10
- **Language**: TypeScript 5.6.2
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM 7.1.1
- **Styling**: Tailwind CSS 3.4.17 + DaisyUI 4.12.23
- **Drag & Drop**: @hello-pangea/dnd, React DnD
- **Image Editor**: react-filerobot-image-editor
- **File Upload**: react-dropzone
- **Code Quality**: ESLint + Prettier

## 📁 프로젝트 구조

```
src/
├── assets/         # 정적 자원 (이미지, 아이콘 등)
├── components/     # 재사용 가능한 컴포넌트
├── contexts/       # React Context API
├── hooks/          # 커스텀 훅
├── pages/          # 페이지 컴포넌트
├── routes/         # 라우팅 설정
├── services/       # API 호출 및 외부 서비스
├── store/          # Redux 상태 관리
├── theme/          # 테마 및 스타일 설정
├── utils/          # 유틸리티 함수
├── App.tsx         # 메인 앱 컴포넌트
└── main.tsx        # 애플리케이션 진입점
```

## 🚀 시작하기

### 필수 조건

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **개발 서버 실행**
   ```bash
   npm run dev
   ```
   브라우저에서 `http://localhost:5173`으로 접속

3. **프로덕션 빌드**
   ```bash
   npm run build
   ```

4. **빌드 결과 미리보기**
   ```bash
   npm run preview
   ```

5. **코드 검사**
   ```bash
   npm run lint
   ```

## ⚙️ 주요 기능

- **드래그 앤 드롭**: 케이크 디자인 요소들을 자유롭게 배치
- **이미지 편집**: 업로드된 이미지를 직접 편집
- **파일 업로드**: 드래그 앤 드롭 방식의 파일 업로드
- **상태 관리**: Redux Toolkit을 통한 중앙 집중식 상태 관리
- **반응형 디자인**: Tailwind CSS와 DaisyUI를 활용한 모던한 UI

## 🎨 스타일링

이 프로젝트는 **Tailwind CSS**와 **DaisyUI**를 사용하여 스타일링됩니다:

- `tailwind.config.js`: Tailwind CSS 설정
- `postcss.config.js`: PostCSS 설정
- DaisyUI 컴포넌트를 활용한 일관된 디자인 시스템

## 📝 개발 가이드

### 컴포넌트 작성

```typescript
import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

const MyComponent: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default MyComponent;
```

### 상태 관리

Redux Toolkit을 사용하여 상태를 관리합니다. `src/store/` 디렉토리에서 슬라이스를 정의하고 스토어를 설정합니다.

### API 호출

`src/services/` 디렉토리에서 API 호출 로직을 관리합니다.

## 🔧 설정 파일

- `vite.config.ts`: Vite 기본 설정
- `vite.config-dev.ts`: 개발 환경 설정
- `vite.config-prod.ts`: 프로덕션 환경 설정
- `tsconfig.json`: TypeScript 설정
- `eslint.config.js`: ESLint 설정

## 🆘 문제 해결

### 자주 발생하는 문제

1. **npm install 실패**
   - Node.js 버전을 확인하세요 (18.0.0 이상 필요)
   - 캐시를 삭제해보세요: `npm cache clean --force`

2. **타입스크립트 오류**
   - `npm run lint`로 코드를 검사하세요
   - `tsconfig.json` 설정을 확인하세요

3. **빌드 실패**
   - 환경 변수가 올바르게 설정되었는지 확인하세요
   - 의존성이 최신 상태인지 확인하세요
