import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const NavContainer = styled("nav")({
  display: "flex",
  alignItems: "center",
  gap: "32px",

  "@media (max-width: 768px)": {
    display: "none",
  },
});

export const NavItem = styled(NavLink)({
  fontSize: "16px",
  fontWeight: 500,
  cursor: "pointer",
  color: "#333",
  transition: "0.25s",
  textDecoration: "none",

  "&:hover": {
    color: "#3A7BFF",
  },

  "&.active": {
    color: "#3A7BFF",
    fontWeight: 600,
  },
});

export const MobileMenuProps = styled("div")(({ menuOpen }: any) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  background: "#fff",
  padding: "20px",
  borderBottom: "1px solid #e3e3e3",
  overflow: "hidden",

  maxHeight: menuOpen ? "300px" : "0",
  opacity: menuOpen ? 1 : 0,
  transition: "max-height 0.35s ease, opacity 0.3s ease",

  "@media (min-width: 768px)": {
    display: "none",
  },
}));
interface MobileMenuProps {
  menuOpen: boolean;
}

export const MobileMenu = styled("div")<MobileMenuProps>(({ menuOpen }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  background: "#fff",
  padding: "20px",
  borderBottom: "1px solid #e3e3e3",
  overflow: "hidden",

  maxHeight: menuOpen ? "300px" : "0",
  opacity: menuOpen ? 1 : 0,
  transition: "max-height 0.35s ease, opacity 0.3s ease",

  "@media (min-width: 768px)": {
    display: "none",
  },
}));
