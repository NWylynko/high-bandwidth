import { useState, useEffect, createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  User,
} from "firebase/auth";
import { firebaseConfig } from "./config";
import * as Sentry from "@sentry/browser";

interface FirebaseContext {
  user?: User;
}

const firebaseContext = createContext<FirebaseContext>({
  user: undefined,
});

interface FirebaseProviderProps {
  children: React.ReactNode;
}

export const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  // const inBrowser = typeof window !== "undefined";
  const inBrowser = process.browser;

  // Initialize Firebase, only if in browser
  const [firebase] = useState(
    inBrowser ? initializeApp(firebaseConfig) : undefined
  );
  const [firebaseAuth] = useState(firebase ? getAuth(firebase) : undefined);
  const [user, setUser] = useState<User | undefined>(undefined);

  if (firebaseAuth && !user) {
    signInAnonymously(firebaseAuth);
  }

  useEffect(() => {
    if (firebaseAuth) {
      onAuthStateChanged(firebaseAuth, setUser);
    }
  }, [firebaseAuth]);

  useEffect(() => console.log("firebase", firebase), [firebase]);
  useEffect(() => console.log("firebaseAuth", firebaseAuth), [firebaseAuth]);
  useEffect(() => console.log("user", user), [user]);

  useEffect(() => {
    if (user) {
      Sentry.setUser({ id: user.uid });
    }
  }, [user]);

  return (
    <firebaseContext.Provider value={{ user }}>
      {children}
    </firebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(firebaseContext);
