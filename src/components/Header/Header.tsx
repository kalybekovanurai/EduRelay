import Navbar from "../Navbar/Navbar";
import { HeaderContainer, LoginButton, Logo, NavActions } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>EduRelay</Logo>

      <Navbar />

      <NavActions>
        <LoginButton variant="outlined">Log in</LoginButton>
      </NavActions>
    </HeaderContainer>
  );
};

export default Header;
