import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      gray: string;
    };
    fonts: {
      family: string;
      weight: {
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
      };
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
    };
    shadow: {
      button: string;
      card: string;
    };
  }
}
