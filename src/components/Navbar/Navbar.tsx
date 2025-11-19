import { NavContainer, NavItem, MobileMenu } from "./Navbar.styled";

export default function Navbar({ isMobile, menuOpen }: any) {
  if (!isMobile) {
    return (
      <NavContainer className="desktop">
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to="/students">Students</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contacts">Contacts</NavItem>
      </NavContainer>
    );
  }

  return (
    <MobileMenu menuOpen={menuOpen}>
      <NavItem to="/" end>
        Home
      </NavItem>
      <NavItem to="/students">Students</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/contacts">Contacts</NavItem>
    </MobileMenu>
  );
}
