import { NavContainer, NavItem, MobileMenu } from "./Navbar.styled";

export const Navbar = ({ isMobile, menuOpen }: any) => {
  if (!isMobile) {
    return (
      <NavContainer className="desktop">
        <NavItem to="/" end>
          Главная
        </NavItem>
        <NavItem to="/students">Студенты</NavItem>
        <NavItem to="/about">О нас</NavItem>
        <NavItem to="/contacts">Контакты</NavItem>
      </NavContainer>
    );
  }

  return (
    <MobileMenu menuOpen={menuOpen}>
      <NavItem to="/" end>
        Home
      </NavItem>
      <NavItem to="/students">Студенты</NavItem>
      <NavItem to="/about">О нас</NavItem>
      <NavItem to="/contacts">Контакты</NavItem>
    </MobileMenu>
  );
};
