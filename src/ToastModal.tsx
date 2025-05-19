/** @format */

import React, { useEffect, useState } from "react";

type ToastType = "success" | "error" | "info" | "default";

interface ToastModalProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
}

const emojiMap: Record<ToastType, string> = {
  success: "✅",
  error: "❌",
  info: "ℹ️",
  default: "💬",
};

const backgroundMap: Record<ToastType, string> = {
  success: "#e6fffb",
  error: "#ffeaea",
  info: "#e8f4ff",
  default: "#fffbe6",
};

const ToastModal: React.FC<ToastModalProps> = ({
  message,
  type = "default",
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
        backgroundColor: backgroundMap[type],
        ...(visible
          ? styles.animations[type]?.enter
          : styles.animations[type]?.exit),
      }}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <span style={styles.emoji}>{emojiMap[type]}</span> {message}
    </div>
  );
};

const styles = {
  toastContainer: {
    position: "fixed" as const,
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#333",
    padding: "16px 28px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
    zIndex: 1050,
    fontSize: "15px",
    fontWeight: 500,
    maxWidth: "80%",
    width: "fit-content",
    textAlign: "center" as const,
    transition: "all 0.3s ease-in-out",
  },
  emoji: {
    marginRight: "8px",
    fontSize: "18px",
  },
  animations: {
    success: {
      enter: {
        opacity: 1,
        transform: "translateX(-50%) scale(1.05)",
        animation: "pop 0.3s ease-out",
      },
      exit: {
        opacity: 0,
        transform: "translateX(-50%) scale(0.7)",
      },
    },
    error: {
      enter: {
        opacity: 1,
        transform: "translateX(-50%)",
        animation: "shake 0.4s ease-in-out",
      },
      exit: {
        opacity: 0,
        transform: "translateX(-50%)",
      },
    },
    info: {
      enter: {
        opacity: 1,
        transform: "translateX(-50%) translateY(0)",
        animation: "slideUp 0.3s ease-out",
      },
      exit: {
        opacity: 0,
        transform: "translateX(-50%) translateY(-10px)",
      },
    },
    default: {
      enter: {
        opacity: 1,
        transform: "translateX(-50%)",
        animation: "fadeIn 0.3s ease-out",
      },
      exit: {
        opacity: 0,
        transform: "translateX(-50%)",
      },
    },
  },
};

const styleTag = document.createElement("style");
styleTag.innerHTML = `
@keyframes shake {
  0% { transform: translateX(-50%) translateX(0); }
  25% { transform: translateX(-50%) translateX(-5px); }
  50% { transform: translateX(-50%) translateX(5px); }
  75% { transform: translateX(-50%) translateX(-5px); }
  100% { transform: translateX(-50%) translateX(0); }
}
@keyframes pop {
  0% { transform: translateX(-50%) scale(0.6); opacity: 0; }
  100% { transform: translateX(-50%) scale(1.05); opacity: 1; }
}
@keyframes slideUp {
  0% { transform: translateX(-50%) translateY(20px); opacity: 0; }
  100% { transform: translateX(-50%) translateY(0); opacity: 1; }
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`;
document.head.appendChild(styleTag);

export default ToastModal;
