import React, { createContext, useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';

export const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <AuthenticationContext.Provider value={{ isAuthenticated: !!user }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
