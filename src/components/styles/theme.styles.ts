import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)",
    secondary: "#eef2ff",
    white: "#ffffff",
    black: "#0f172a",
    gray: "#6b7280",
  },

  fonts: {
    family: "'Inter', system-ui, sans-serif",
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
  },

  shadow: {
    button: "0 6px 18px rgba(59,130,246,0.25)",
    card: "0 8px 24px rgba(2,6,23,0.06)",
  },
};
