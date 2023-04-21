import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignIn from "../../features/accounts/sign-in-screen";

const SignInScreen = () => <SignIn />;

export default function AccountsNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Sign-in" component={SignInScreen} />
    </Stack.Navigator>
  );
}
