import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignIn from "../../features/accounts/sign-in-screen";
import SignUp from "../../features/accounts/sign-up-screen";
import Loading from "../../features/accounts/loading-screen";
import ForgotPassword from "../../features/accounts/forgot-password-screen";

const SignInScreen = () => <SignIn />;
const SignUpScreen = () => <SignUp />;
const LoadingScreen = () => <Loading />;
const ForgotPasswordScreen = () => <ForgotPassword />;

export default function AccountsNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
      <Stack.Screen name="Sign-in" component={SignInScreen} />
      <Stack.Screen name="Sign-up" component={SignUpScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
    </Stack.Navigator>
  );
}
