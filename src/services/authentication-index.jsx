import React, { createContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const [loginRequestError, setLoginRequestError] = useState(null);
  const [registerRequestError, setRegisterRequestError] = useState();
  const [passwordResetEmailError, setPasswordResetEmailError] = useState();

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

  const loginRequest = (email, password) => {
    setLoading(!loading);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then((querySnapshot) => {
        firestore()
          .collection("users")
          .doc(querySnapshot.user.uid)
          .get()
          .then((documentSnapshot) => {
            if (documentSnapshot.exists) {
              setUserInfo(documentSnapshot.data());
            }
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setLoading(false);
          setLoginRequestError("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          setLoading(false);
          setLoginRequestError("That email address is invalid!");
        }

        if (error.code === "auth/user-not-found") {
          setLoading(false);
          setLoginRequestError(
            "There is no user record corresponding to this Account. The user may have been deleted."
          );
        }

        if (error.code === "auth/wrong-password") {
          setLoading(false);
          setLoginRequestError("Wrong Password!");
        } else {
          setLoading(false);
          setLoginRequestError(error.code);
        }
      });

    setLoading(!loading);
  };

  const registerRequest = (IdNumber, email, password) => {
    setLoading(!loading);

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((querySnapshot) => {
        firestore().collection("users").doc(querySnapshot.user.uid).set({
          id_no: IdNumber,
        });
      })
      .catch((error) => {
        if (error === "auth/email-already-in-use") {
          setLoading(false);
          setRegisterRequestError("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          setLoading(false);
          setRegisterRequestError("That email address is invalid!");
        }

        if (error.code === "auth/operation-not-allowed") {
          setLoading(false);
          setRegisterRequestError("Account is Disabled!");
        }

        if (error.code === "auth/weak-password") {
          setLoading(false);
          setRegisterRequestError("Weak Password!");
        }
        setLoading(false);
        console.error(error);
      });
  };

  const logOutRequest = () => {
    auth().signOut();
  };

  const passwordVerificationRequest = (email) => {
    setLoading(true);
    auth()
      .sendPasswordResetEmail(email)
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          setLoading(false);
          setPasswordResetEmailError();
        }
        if (error.code === "auth/missing-android-pkg-name") {
          setLoading(false);
          setPasswordResetEmailError();
        }
        if (error.code === "auth/missing-continue-uri") {
          setLoading(false);
          setPasswordResetEmailError();
        }
        if (error.code === "auth/missing-ios-bundle-id") {
          setLoading(false);
          setPasswordResetEmailError();
        }
        if (error.code === "auth/invalid-continue-uri") {
          setLoading(false);
          setPasswordResetEmailError();
        }
        if (error.code === "auth/unauthorized-continue-uri") {
          setLoading(false);
          setPasswordResetEmailError();
        }
        if (error.code === "auth/user-not-found") {
          setLoading(false);
          setPasswordResetEmailError();
        }
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        loading,
        loginRequest,
        loginRequestError,
        userInfo,
        registerRequest,
        registerRequestError,
        logOutRequest,
        passwordVerificationRequest,
        passwordResetEmailError
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
