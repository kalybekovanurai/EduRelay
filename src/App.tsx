import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme.styles";
import Footer from "./components/Footer/Footer";
import { GlobalStyles } from "./components/styles/Global.styles";
import AppRouter from "./routes/AppRouter";
import { Header } from "./components/Header/Header";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header/>
      <AppRouter />
      <Footer />
    </ThemeProvider>
  );
}
