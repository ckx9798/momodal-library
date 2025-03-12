/** @format */

import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  width?: number;
  height?: number;
  padding?: number;
  borderRadius?: number;
}

const Modal = ({
  isOpen,
  children,
  onClose,
  width = 500,
  height = 300,
  padding = 20,
  borderRadius = 8,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div
        style={{
          ...styles.modal,
          width: `${width}px`,
          height: `${height}px`,
          padding: `${padding}px`,
          borderRadius: `${borderRadius}px`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button onClick={onClose} style={styles.closeButton}>
          닫기
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    textAlign: "center" as const,
  },
  closeButton: {
    marginTop: "15px",
  },
};

export default Modal;
