import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Menlo, Monaco, 'Courier New', monospace;
  }
`;

const theme = {
  colors: {
    primary: "#134277",
    text: "#0d2b4e",
  },
};

interface ThemeProps {
  children: React.ReactNode;
}

export const Theme = ({ children }: ThemeProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
