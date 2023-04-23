import { TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import {
  Container,
  StyledButton,
  StyledTextInput,
} from "../../components/components-index";
import { Text, TextInput } from "react-native-paper";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication-index";
import Loading from "./loading-screen";

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const { passwordVerificationRequest, loading, passwordResetEmailError } =
    useContext(AuthenticationContext);

  return (
    <Container>
      <View className="">
        <View>
          <Lottie
            className="w-full"
            source={require("../../assets/lottie-reset-password.json")}
            autoPlay
          />
        </View>
        <View className="mb-4">
          <Text className="font-bold text-3xl">Forgot password</Text>
          <Text className="w-3/4">
            Ohh no, forgot your password? Please fill in the form to reset
            password
          </Text>
        </View>
        <StyledTextInput
          label={"Email Address"}
          autoComplete="email"
          inputMode="email"
          keyboardType="email-address"
          onChangeText={setEmail}
          onEndEditing={() =>
            !email.includes("@g.msuiit.edu.ph")
              ? setEmailError(true)
              : setEmailError(false)
          }
          placeholder="@g.msuiit.edu.ph"
          textContentType={"emailAddress"}
          right={<TextInput.Icon icon={"email"} forceTextInputFocus={false} />}
          error={emailError}
          errorMessage={"Invalid email address"}
          maxLength={64}
        />

        <TouchableOpacity onPress={() => passwordVerificationRequest(email)}>
          <StyledButton title={"Continue"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-center">Back to Login Screen</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
