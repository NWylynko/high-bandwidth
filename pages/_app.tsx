import { FirebaseProvider } from "@/firebase/provider";
import { Theme } from "@/components/Theme";

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
