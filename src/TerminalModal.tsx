/** @format */

import React, { ReactNode, useEffect } from "react";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: number;
  height?: number;
  borderRadius?: number;
  headerTitle?: string;
  headerFontSize?: number;
  white?: boolean;
}

const TerminalModal = ({
  isOpen,
  children,
  onClose,
  width = 400,
  height = 300,
  borderRadius = 10,
  headerTitle = "Modal",
  headerFontSize = 14,
  white = false,
}: TerminalModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalBackground = white ? "#ffffff" : "#1e1e1e";
  const headerBackground = white ? "#f0f0f0" : "#2c2c2c";
  const textColor = white ? "#333" : "#d4d4d4";

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div
        style={{
          ...styles.modal,
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: `${borderRadius}px`,
          backgroundColor: modalBackground,
          color: textColor,
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div
          style={{
            ...styles.header,
            fontSize: `${headerFontSize}px`,
            backgroundColor: headerBackground,
            color: textColor,
          }}
        >
          <div style={styles.leftControls}>
            <span
              style={{ ...styles.circle, backgroundColor: "#ff5f56" }}
              onClick={onClose}
            />
            <span style={{ ...styles.circle, backgroundColor: "#ffbd2e" }} />
            <span style={{ ...styles.circle, backgroundColor: "#27c93f" }} />
          </div>
          <div>{`📂 ${headerTitle}`}</div>
          <button
            style={{ ...styles.closeButton, color: textColor }}
            onClick={onClose}
            aria-label="Close modal"
          >
            ✖
          </button>
        </div>

        <div style={{ ...styles.content, color: textColor }}>
          <pre style={styles.console}>{children}</pre>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    zIndex: 1000,
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    fontFamily: "'Courier New', monospace",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: "10px",
    fontWeight: "bold",
  },
  leftControls: {
    position: "absolute",
    left: "10px",
    display: "flex",
    gap: "8px",
  },
  closeButton: {
    position: "absolute",
    right: "12px",
    fontSize: "14px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  circle: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    display: "inline-block",
    cursor: "pointer",
  },
  content: {
    flexGrow: 1,
    padding: "20px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  console: {
    margin: 0,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  },
};

export default TerminalModal;
