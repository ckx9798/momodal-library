<!-- @format -->

# 📦 momodal-library

`momodal-library`는 간단하고 재사용 가능한 **Modal**,**TerminalModal**과
**Button** 컴포넌트를 제공하는 React UI 라이브러리입니다.  
타입스크립트로 작성되어 타입 안정성을 갖추고 있으며, 기본 스타일과 사용성을 고려하여 설계되었습니다.

<br>

## ✨ Features

- ✅ **기본 Modal**: 심플하고 유연한 모달 컴포넌트
- ✅ **TerminalModal**: 맥OS 스타일의 커스텀 디자인 모달
- ✅ 다양한 스타일과 크기를 제공하는 Button (`primary`, `secondary`, `danger`)
- ✅ 타입스크립트 지원

<br>

## 📦 설치

```js
npm install momodal-library
# 또는
yarn add momodal-library
```

<br>
<br>

## 🚀 Modal 컴포넌트 사용법

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

# 📌 TerminalModal 컴포넌트 사용법

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

# 🎨 Button 컴포넌트 사용법

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
<br>
<br>

# 🚀 전체 사용 예제

```js
import React, { useState } from "react";
import { Modal, Button } from "momodal-library";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: 50 }}>
      <Button label="모달 열기" onClick={() => setIsModalOpen(true)} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>🎉 안녕하세요!</h2>
        <p>momodal-libary로 만든 모달입니다</p>
        <Button label="닫기" onClick={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};
```

```js
import React, { useState } from "react";
import { TerminalModal, Button } from "momodal-library";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: 50 }}>
      <Button label="모달 열기" onClick={() => setIsOpen(true)} />

      <TerminalModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        headerTitle="🎉 TerminalModal"
        white={true}
      >
        <p>momodal-library로 만든 흰 배경 TerminalModal입니다!</p>
        <Button label="닫기" onClick={() => setIsOpen(false)} />
      </TerminalModal>
    </div>
  );
};
```
