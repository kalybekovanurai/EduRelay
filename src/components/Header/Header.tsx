import Logo from "../../assets/Icons/EduRelayLogo.png";
import LoginModal from "../../pages/Login/LoginModal";
import { Avatar } from "../../pages/Students/StudentsPage.styled";
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
  const [showLogin, setShowLogin] = useState(false);
  const [studentAvatar, setStudentAvatar] = useState("");
  return (
    <>
      <HeaderContainer>
        <LogoImg src={Logo} alt="EduRelay Logo" />
        <Navbar isMobile={false} />

        <NavActions>
          {studentAvatar ? (
            <div style={{ cursor: "pointer" }}>
              <Avatar src={studentAvatar} />
            </div>
          ) : (
            <LoginButton variant="outlined" onClick={() => setShowLogin(true)}>
              Log in
            </LoginButton>
          )}

          <BurgerButton onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? "✖" : "☰"}
          </BurgerButton>
        </NavActions>
      </HeaderContainer>

      <Navbar isMobile={true} menuOpen={menuOpen} />
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          setStudentAvatar={(studentAvatar: string) => {
            setStudentAvatar(studentAvatar);
          }}
        />
      )}
    </>
  );
};

export default Header;
