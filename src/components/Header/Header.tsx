import Logo from "../../assets/Icons/EduRelayLogo.png";
import LoginModal from "../../pages/auth/LoginModal";
import { Avatar } from "../../pages/Students/StudentsPage.styled";
import { useAppSelector } from "../../stores/hooks";
import Navbar from "../Navbar/Navbar";
import {
  HeaderContainer,
  LoginButton,
  NavActions,
  BurgerButton,
} from "./Header.styled";
import { LogoImg } from "./LogoImg.styled";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const { isAuth, user } = useAppSelector((state) => state.auth);

  return (
    <>
      <HeaderContainer>
        <LogoImg src={Logo} alt="EduRelay Logo" />

        {/* Navbar для десктопа */}
        <Navbar isMobile={false} />

        <NavActions>
          {isAuth && user ? (
            // Показываем аватар и имя
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                gap: "8px",
              }}
            >
              <Avatar src={user.avatar} />
              <span>{user.name}</span>
            </div>
          ) : (
            // Кнопка Log in для неавторизованного пользователя
            <LoginButton variant="outlined" onClick={() => setShowLogin(true)}>
              Log in
            </LoginButton>
          )}

          {/* Бургер для мобильного меню */}
          <BurgerButton onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? "✖" : "☰"}
          </BurgerButton>
        </NavActions>
      </HeaderContainer>

      {/* Navbar для мобильного */}
      <Navbar isMobile={true} menuOpen={menuOpen} />

      {/* Модальное окно логина */}
      {showLogin && (
        <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
      )}
    </>
  );
};