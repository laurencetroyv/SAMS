import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication-index";
import { NavigationContainer } from "@react-navigation/native";
import AccountsNavigation from "./accounts-navigation";
import AppNavigation from "./app-navigation";

export default function NavigationIndex() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AccountsNavigation />}
    </NavigationContainer>
  );
}
