/** @format */

import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  width?: number;
  padding?: number;
  borderRadius?: number;
  showCloseButton?: boolean;
}

const Modal = ({
  isOpen,
  children,
  onClose,
  width = 400,
  padding = 20,
  borderRadius = 8,
  showCloseButton = true,
}: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div style={styles.overlay} onClick={onClose}>
      <div
        style={{
          ...styles.modal,
          width: `${width}px`,
          padding: `${padding}px`,
          borderRadius: `${borderRadius}px`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={styles.content}>{children}</div>
        {showCloseButton && (
          <button onClick={onClose} style={styles.closeButton}>
            닫기
          </button>
        )}
      </div>
    </div>,
    document.body
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
    padding: "20px",
  },
  modal: {
    background: "#fff",
    textAlign: "center" as const,
    minHeight: "150px",
    maxHeight: "80vh",
    overflowY: "auto" as const,

    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  content: {
    width: "100%",
    flexGrow: 1,
    maxHeight: "70vh",
    overflowY: "auto" as const,
    paddingBottom: "10px",
  },
  closeButton: {
    marginTop: "15px",
    cursor: "pointer",
  },
};

export default Modal;
