import React from "react";
import { Divider, Text } from "react-native-paper";
import { View } from "react-native";
import { SignInIllustration } from "../../assets/assets-index";
import {
  Container,
  StyledTextInput as EmailInput,
  StyledTextInput as PasswordInput,
  StyledButton,
} from "../../components/components-index";

export default function SignIn() {
  return (
    <Container>
      <View>
        <SignInIllustration />
      </View>

      <Divider className="my-8" />

      <View className="mb-4">
        <Text className="text-primary text-3xl font-bold">Hello</Text>
        <Text className="font-bold text-3xl">Login now.</Text>
        <Text className="w-3/4">
          Welcome back. Please fill in the form to sign in and continue
        </Text>
      </View>

      <EmailInput />
      <PasswordInput />

      <StyledButton title={"Sign In"} />

      <View className="my-4 space-y-4">
        <Text className="text-center">
          Don't have an account?{" "}
          <Text className="font-bold">Register Here</Text>
        </Text>

        <Text className="text-center">
          Forgot Password? <Text className="font-bold">Register Here</Text>
        </Text>
      </View>
    </Container>
  );
}