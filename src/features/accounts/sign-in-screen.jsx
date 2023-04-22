import React, { useContext, useState } from "react";
import { Divider, Modal, Portal, Text, TextInput } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";
import { SignInIllustration } from "../../assets/assets-index";
import {
  Container,
  StyledTextInput as EmailInput,
  StyledTextInput as PasswordInput,
  StyledButton,
} from "../../components/components-index";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication-index";
import Loading from "./loading-screen";

export default function SignIn() {
  const navigation = useNavigation();
  const { loginRequest, loading } = useContext(AuthenticationContext);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordSecure, setPasswordSecure] = useState(true);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <View>
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

          <EmailInput
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
            right={
              <TextInput.Icon icon={"email"} forceTextInputFocus={false} />
            }
            error={emailError}
            errorMessage={"Invalid email address"}
            maxLength={64}
          />

          <PasswordInput
            label={"Password"}
            autoComplete={"password"}
            autoCapitalize={"none"}
            inputMode={"text"}
            onChangeText={setPassword}
            placeholder={"P@ssw0rd"}
            secureTextEntry={passwordSecure}
            textContentType={"password"}
            right={
              <TextInput.Icon
                icon={passwordSecure ? "eye" : "eye-outline"}
                onPress={() => setPasswordSecure(!passwordSecure)}
                forceTextInputFocus={false}
              />
            }
            error={passwordError}
            errorMessage={"Invalid password"}
            passwordRules="minlength: 8; required: lower; required: upper; required: digit; required: [-];"
          />

          <View>
            <TouchableOpacity
              onPress={() => {
                loginRequest(email, password);
              }}
            >
              <StyledButton title={"Sign In"} />
            </TouchableOpacity>
          </View>

          <View className="my-4 space-y-4">
            <TouchableOpacity onPress={() => navigation.navigate("Sign-up")}>
              <Text className="text-center">
                Don't have an account?{" "}
                <Text className="font-bold">Register Here</Text>
              </Text>
            </TouchableOpacity>

            <Text className="text-center">
              Forgot Password? <Text className="font-bold">Register Here</Text>
            </Text>
          </View>
        </View>
      )}
    </Container>
  );
}
