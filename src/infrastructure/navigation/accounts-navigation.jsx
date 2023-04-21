import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignIn from "../../features/accounts/sign-in-screen";
import SignUp from "../../features/accounts/sign-up-screen";

const SignInScreen = () => <SignIn />;
const SignUpScreen = () => <SignUp />;

export default function AccountsNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Sign-in" component={SignInScreen} />
      <Stack.Screen name="Sign-up" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
