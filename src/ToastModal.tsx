/** @format */

import React, { useEffect, useState } from "react";

interface ToastModalProps {
  message: string;
  duration?: number;
  onClose?: () => void;
}

const ToastModal: React.FC<ToastModalProps> = ({
  message,
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) {
        setTimeout(onClose, 300);
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      style={{
        ...styles.toastContainer,
        ...(visible ? styles.fadeIn : styles.fadeOut),
      }}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      {message}
    </div>
  );
};

const styles = {
  toastContainer: {
    position: "fixed" as const,
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#ededed",
    color: "#333",
    padding: "12px 24px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
    zIndex: 1050,
    fontSize: "15px",
    fontWeight: 500,
    maxWidth: "80%",
    width: "fit-content",
    textAlign: "center" as const,
    transition: "opacity 0.3s ease, transform 0.3s ease",
  },
  fadeIn: {
    opacity: 1,
    transform: "translateX(-50%) scale(1)",
  },
  fadeOut: {
    opacity: 0,
    transform: "translateX(-50%) scale(0.95)",
  },
};

export default ToastModal;
