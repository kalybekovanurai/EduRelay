import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme.styles";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { GlobalStyles } from "./components/styles/Global.styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}
