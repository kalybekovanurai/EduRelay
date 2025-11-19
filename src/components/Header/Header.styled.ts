import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const HeaderContainer = styled("header")(() => ({
  width: "100%",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 40px",
  boxSizing: "border-box",
  background: "#ffffffaa",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid #e3e3e3",
  position: "sticky",
  top: 0,
  zIndex: 1000,

  "@media (max-width: 768px)": {
    padding: "0 20px",
  },
}));

export const NavActions = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "16px",

  "@media (max-width: 768px)": {
    gap: "8px",
  },
});

export const LoginButton = styled(Button)({
  padding: "6px 20px",
  borderRadius: "12px",
  textTransform: "none",
  borderColor: "#3A7BFF",
  color: "#3A7BFF",
  fontWeight: 500,
  "&:hover": {
    borderColor: "#2f63cc",
    background: "rgba(58, 123, 255, 0.08)",
  },

  "@media (max-width: 768px)": {
    display: "none",
  },
});

export const BurgerButton = styled("button")({
  display: "none",
  fontSize: "28px",
  border: "none",
  background: "none",
  cursor: "pointer",

  "@media (max-width: 768px)": {
    display: "block",
  },
});
