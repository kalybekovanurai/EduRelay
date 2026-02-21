import { ThemeProvider } from "styled-components";
import { theme } from "../components/styles/theme.styles"; 

import AppRouter from "../routes/AppRouter";
import { GlobalStyles } from "../components/styles/Global.styles";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

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
