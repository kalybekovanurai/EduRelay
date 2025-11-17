import { NavLink } from "react-router-dom";
import { NavContainer, NavItem } from "./Navbar.styled";

export default function Navbar() {
  return (
    <NavContainer>
      <NavItem as={NavLink} to="/" end>
        Home
      </NavItem>

      <NavItem as={NavLink} to="/students">
        Students
      </NavItem>

      <NavItem as={NavLink} to="/about">
        About
      </NavItem>

      <NavItem as={NavLink} to="/contacts">
        Contacts
      </NavItem>
    </NavContainer>
  );
}
