import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AuthenticationProvider from "./src/services/authentication-index";

export default function App() {
  return (
    <AuthenticationProvider>
      <PaperProvider>
        <StatusBar style="auto" />
      </PaperProvider>
    </AuthenticationProvider>
  );
}
