import { createGlobalStyle, ThemeProvider } from "styled-components";
import { FirebaseProvider } from "@/firebase/provider";
import { Theme } from "@/components/Theme";

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
  return (
    <>
      <Theme>
        <FirebaseProvider>
          <Component {...pageProps} />
        </FirebaseProvider>
      </Theme>
    </>
  );
}
