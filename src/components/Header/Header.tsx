import Logo from "../../assets/Icons/EduRelayLogo.png";
import Navbar from "../Navbar/Navbar";
import {
  HeaderContainer,
  LoginButton,
  NavActions,
  BurgerButton,
} from "./Header.styled";
import { LogoImg } from "./LogoImg.styled";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <LogoImg src={Logo} alt="EduRelay Logo" />
        <Navbar isMobile={false} />

        <NavActions>
          <LoginButton variant="outlined">Log in</LoginButton>

          <BurgerButton onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? "✖" : "☰"}
          </BurgerButton>
        </NavActions>
      </HeaderContainer>

      <Navbar isMobile={true} menuOpen={menuOpen} />
    </>
  );
};

export default Header;
