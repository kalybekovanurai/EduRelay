import { useState } from "react";
import Logo from "../../assets/Icons/EduRelayLogo.png";
import { useAppSelector, useAppDispatch } from "../../stores/hooks";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  LogoImg,
  NavActions,
  LoginButton,
  BurgerButton,
  UserMenu,
  UserMenuItem,
  UserBlock,
  UserAvatar,
  UserName,
} from "./Header.styled";
import { logout } from "../../stores/slices/auth/loginSlice";
import { Navbar } from "../Navbar/Navbar";
import { LoginModal } from "../../pages/auth/LoginModal";
import { LoadingPage } from "../../utils/loadingPage/LoadingPage";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { isAuth, user, loading  } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    setUserMenuOpen(false);
  };

  const goToProfile = () => {
    if (user) {
      navigate(`/students/${user.id}`);
      setUserMenuOpen(false);
    }
  };

    if (loading) {
      return <LoadingPage />;
    }
  return (
    <>
      <HeaderContainer>
        <LogoImg src={Logo} alt="EduRelay Logo" />

        <Navbar isMobile={false} />

        <NavActions>
          {isAuth && user ? (
            <UserBlock>
              <div
                onClick={() => setUserMenuOpen((prev) => !prev)}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <UserAvatar src={user.avatar} />
                <UserName>{user.name}</UserName>
              </div>

              {userMenuOpen && (
                <UserMenu>
                  <UserMenuItem onClick={goToProfile}>Профиль</UserMenuItem>
                  <UserMenuItem onClick={handleLogout} color="red">
                    Выйти
                  </UserMenuItem>
                </UserMenu>
              )}
            </UserBlock>
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
        <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
      )}
    </>
  );
};