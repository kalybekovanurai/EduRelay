import { ThemeProvider } from "styled-components";
import { theme } from "../components/styles/theme.styles"; 
import AppRouter from "../routes/AppRouter";
import { GlobalStyles } from "../components/styles/Global.styles";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/footer/Footer";

export const AppLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <AppRouter />
      <Footer />
    </ThemeProvider>
  );
};
