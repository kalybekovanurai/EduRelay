import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const NavContainer = styled("nav")({
  display: "flex",
  alignItems: "center",
  gap: "32px",
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
