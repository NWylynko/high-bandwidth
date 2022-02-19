import { createGlobalStyle, ThemeProvider } from "styled-components";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/config";

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

export default function App({ Component, pageProps }) {
  // Initialize Firebase, only if in browser
  const app = process.browser ? initializeApp(firebaseConfig) : null;

  console.log(app);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
