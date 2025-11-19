import Logo from "../../assets/Icons/EduRelayLogo.png";
import Navbar from "../Navbar/Navbar";
import { HeaderContainer, LoginButton, NavActions } from "./Header.styled";
import { LogoImg } from "./LogoImg.styled";


const Header = () => {
  return (
    <HeaderContainer>
   <LogoImg src={Logo} alt="EduRelay Logo" />

      <Navbar />

      <NavActions>
        <LoginButton variant="outlined">Log in</LoginButton>
      </NavActions>
    </HeaderContainer>
  );
};

export default Header;
