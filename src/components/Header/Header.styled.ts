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

export const LogoImg = styled("img")({
  height: "40px",
  cursor: "pointer",
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
    display: "inline-flex",
    padding: "4px 12px",
    fontSize: "13px",
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

export const UserBlock = styled("div")({
  position: "relative", // важно!
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const UserAvatar = styled("img")({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  objectFit: "cover",
});

export const UserName = styled("span")({
  fontSize: "14px",
  fontWeight: 500,
  color: "#000",
});

export const UserMenu = styled("div")({
  position: "absolute", 
  top: "45px", 
  right: 0,
  background: "#fff",
  border: "1px solid #e3e3e3",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
  padding: "8px 0",
  minWidth: "140px",
  zIndex: 2000,
});

export const UserMenuItem = styled("div")<{ color?: string }>(({ color }) => ({
  padding: "10px 16px",
  cursor: "pointer",
  fontSize: "14px",
  color: color || "#000",
  transition: "0.2s",

  "&:hover": {
    background: "#f5f5f5",
  },
}));