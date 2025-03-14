/** @format */

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  width?: number | string;
  height?: number | string;
}

const Button = ({
  label,
  onClick,
  color = "primary",
  size = "md",
  width,
  height,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.button,
        ...styles[color],
        ...styles[size],
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      {label}
    </button>
  );
};

const styles = {
  button: {
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: "#3b82f6",
    color: "white",
    hover: {
      backgroundColor: "#2563eb",
    },
  },
  secondary: {
    backgroundColor: "#6b7280",
    color: "white",
    hover: {
      backgroundColor: "#4b5563",
    },
  },
  danger: {
    backgroundColor: "#ef4444",
    color: "white",
    hover: {
      backgroundColor: "#dc2626",
    },
  },
  sm: {
    padding: "4px 8px",
    fontSize: "0.875rem",
  },
  md: {
    padding: "8px 16px",
    fontSize: "1rem",
  },
  lg: {
    padding: "12px 24px",
    fontSize: "1.125rem",
  },
  xl: {
    padding: "16px 32px",
    fontSize: "1.4rem",
  },
};

export default Button;
