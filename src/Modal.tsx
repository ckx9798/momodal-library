/** @format */

import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
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
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    textAlign: "center" as const,
  },
  closeButton: {
    marginTop: "15px",
  },
};
