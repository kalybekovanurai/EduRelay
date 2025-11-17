import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif;
    background: #f7fafc;
    color: #0f172a;
  }

  button, input, textarea {
    font-family: inherit;
  }
`;
