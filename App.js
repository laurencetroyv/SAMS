import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AuthenticationProvider from "./src/services/authentication-index";
import NavigationIndex from "./src/infrastructure/navigation/navigation-index";
import StudentProvider from "./src/services/student-index";

export default function App() {
  return (
    <StudentProvider>
      <AuthenticationProvider>
        <PaperProvider>
          <NavigationIndex />
          <StatusBar style="auto" />
        </PaperProvider>
      </AuthenticationProvider>
    </StudentProvider>
  );
}
