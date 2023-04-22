import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication-index";
import { NavigationContainer } from "@react-navigation/native";
import AccountsNavigation from "./accounts-navigation";
import AppNavigation from "./app-navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StudentProvider from "../../services/student-index";

export default function NavigationIndex() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <StudentProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          {isAuthenticated ? <AppNavigation /> : <AccountsNavigation />}
        </NavigationContainer>
      </SafeAreaProvider>
    </StudentProvider>
  );
}
