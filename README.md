<!-- @format -->

# 📦 momodal-library

`momodal-library`는 간단하고 재사용 가능한 모달을 제공하는 React UI 라이브러리입니다.
기본 스타일의 **Modal**, 터미널 스타일의 **TerminalModal**과
다양한 디자인의 **Button** 컴포넌트,
토스트 알림을 알려주는 **ToastModal** 컴포넌트를 제공합니다
타입스크립트로 작성되어 타입 안정성을 갖추고 있으며, 기본 스타일과 사용성을 고려하여 설계되었습니다.

<br>

## 🎯 Features

- ✅ **Modal**: 기본 모달디자인의 심플하고 유연한 모달 컴포넌트
- ✅ **TerminalModal**: 맥OS 스타일의 커스텀 디자인 모달
- ✅ **Button**: 다양한 스타일과 크기를 제공하는 버튼 컴포넌트 (`primary`, `secondary`, `danger`)
- ✅ **ToastModal**: 여러 서버 메시지를 처리 할 수 있는 Toast 알림 모달 ("success", "error", "info", "default")

<br>

## 📍 설치

```js
npm install momodal-library
# 또는
yarn add momodal-library
```

<br>

## 📂 Modal 컴포넌트 사용법

```js
import { Modal } from "momodal-library";

<Modal
  isOpen={isModalOpen} // 모달창 열기 상태 관리
  onClose={handleClose} // 바깥 클릭 시 모달 창 닫힘
  width={500} // 모달 너비 (기본 400)
  padding={24} // 모달 내부 여백 (기본 20)
  borderRadius={12} // 모달 테투리 둥글기 (기본 8)
  showCloseButton={true} // 기본 닫기 버튼 보이기 여부 (기본값: true)
>
  <h2>모달 콘텐츠</h2>
  <p>여기에 원하는 내용을 넣으세요!</p>
</Modal>;
```

<img src="https://i.imgur.com/Hz5FXlx.png" width="400"/>

<br>
<br>

## 📌 TerminalModal 컴포넌트 사용법

```js
import { TerminalModal } from "momodal-library";

<TerminalModal
  isOpen={isOpen} // 모달창 열기 상태 관리
  onClose={handleClose} // 바깥 클릭 시 모달 창 닫힘
  width={500} // 모달 너비 (기본 400)
  height={300} // 모달 높이 (기본 300)
  borderRadius={12} // 모달 테투리 둥글기 (기본 10)
  headerTitle="모달" // 모달 헤더 제목
  headerFontSize={16} // 모달 헤더 제목 크기 조절 (기본 14px)
  white={true} // true: 흰 배경 (기본 false: 다크 배경)
>
  <h2>모달 콘텐츠</h2>
  <p>여기에 원하는 내용을 넣으세요!</p>
</TerminalModal>;
```

<img src="https://i.imgur.com/V9mUjwo.png" width="400"/>
<img src="https://i.imgur.com/uunlPsT.png" width="400"/>

<br>

## 🎨 Button 컴포넌트 사용법

```js
import { Button } from "momodal-library";

<Button
  label="확인" // 버튼 안에서 표시되는 텍스트
  onClick={handleConfirm} // 버튼 클릭 이벤트 핸들러
  color="primary" // 버튼 색상 테마 ("primary" | "secondary" | "danger" 제공)
  size="lg" // 버튼 크기 ("sm" | "md" | "lg" | "xl"	제공)
  width={200} // 버튼 너비
  height={200} // 버튼 높이
/>;
```

<br>

## 🌍 ToastModal 컴포넌트 사용법

```js
import { ToastModal } from "momodal-library";

export default function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <h1>📢 ToastModal 데모</h1>
      <button onClick={() => setShowToast(true)}>토스트 띄우기</button>

      {showToast && (
        <ToastModal
          message="저장되었습니다!"
          type="success" // "success" | "error" | "info" | "default" 제공
          duration={3000} // 닫히는 시간 조절
          position="top-center"
          //  `top-left` | `top-center` | `top-right` | `bottom-left` | `bottom-center` | `bottom-right` 제공
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
```

<img src="https://i.imgur.com/nPHRrmo.jpeg" width="400"/>

<br>
<br>

# 🚀 전체 사용 예제

```js
import React, { useState } from "react";
import { Modal, TerminalModal, Button, ToastModal } from "momodal-library";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: "default",
    message: "",
  });

  // 일반 모달 열기/닫기
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // 터미널 모달 열기/닫기
  const handleOpenTerminalModal = () => setIsTerminalModalOpen(true);
  const handleCloseTerminalModal = () => setIsTerminalModalOpen(false);

  // 버튼 클릭 시 토스트 띄우기
  const handleButtonClick = (success) => {
    setToast({
      show: true,
      type: success ? "success" : "error",
      message: success ? "성공했습니다!" : "실패했습니다!",
    });
  };

  // 토스트 닫기
  const handleToastClose = () => setToast({ ...toast, show: false });

  return (
    <div>
      <button onClick={handleOpenModal}>일반 모달 열기</button>
      <button onClick={handleOpenTerminalModal}>터미널 모달 열기</button>

      {/* 일반 모달 */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        width={500}
        padding={24}
        borderRadius={12}
        showCloseButton={true}
      >
        <h2>일반 모달</h2>
        <Button
          label="성공"
          onClick={() => handleButtonClick(true)}
          color="primary"
          size="md"
          width={100}
          height={40}
        />
        <Button
          label="실패"
          onClick={() => handleButtonClick(false)}
          color="danger"
          size="md"
          width={100}
          height={40}
        />
      </Modal>

      {/* 터미널 모달 */}
      <TerminalModal
        isOpen={isTerminalModalOpen}
        onClose={handleCloseTerminalModal}
        width={500}
        height={300}
        borderRadius={12}
        headerTitle="터미널 모달"
        headerFontSize={16}
        white={true}
      >
        <h2>터미널 모달</h2>
        <Button
          label="성공"
          onClick={() => handleButtonClick(true)}
          color="primary"
          size="md"
          width={100}
          height={40}
        />
        <Button
          label="실패"
          onClick={() => handleButtonClick(false)}
          color="danger"
          size="md"
          width={100}
          height={40}
        />
      </TerminalModal>

      {/* 토스트 모달 */}
      {toast.show && (
        <ToastModal
          message={toast.message}
          type={toast.type}
          duration={3000}
          position="top-center"
          onClose={handleToastClose}
        />
      )}
    </div>
  );
}

export default App;
```
