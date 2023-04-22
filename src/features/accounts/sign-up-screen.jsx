import React, { useContext, useState } from "react";
import {
  Container,
  StyledTextInput as IdNumberInput,
  StyledTextInput as EmailInput,
  StyledTextInput as PasswordInput,
  StyledButton,
} from "../../components/components-index";
import { TouchableOpacity, View } from "react-native";
import { Checkbox, Divider, Text, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication-index";
import Lottie from "lottie-react-native";
import Loading from "./loading-screen";

export default function SignUp() {
  const navigation = useNavigation();
  const { registerRequest, loading } = useContext(AuthenticationContext);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [IdNumber, setIdNumber] = useState("");
  const [IdNumberError, setIdNumberError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordSecure, setPasswordSecure] = useState(true);

  const [checked, setChecked] = useState(false);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View className="items-center">
            <Lottie
              className="w-full"
              source={require("../../assets/lottie-chill.json")}
              autoPlay
              loop
            />
          </View>

          <Divider className="my-8" />

          <View className="mb-4">
            <Text className="text-primary text-3xl font-bold">Hello</Text>
            <Text className="font-bold text-3xl">Create account</Text>
            <Text className="font-bold text-3xl">now.</Text>
            <Text className="w-3/4">
              Please fill in the form to create a new account and continue
            </Text>
          </View>

          <IdNumberInput
            label={"ID Number"}
            autoComplete="email"
            inputMode="email"
            keyboardType="email-address"
            onChangeText={setIdNumber}
            onEndEditing={() =>
              IdNumber.length !== 9
                ? setIdNumberError(true)
                : setIdNumberError(false)
            }
            placeholder="2020-0001"
            textContentType={"emailAddress"}
            right={
              <TextInput.Icon icon={"email"} forceTextInputFocus={false} />
            }
            showHelper={IdNumberError}
            helperMessage={"Invalid ID Number"}
            maxLength={9}
          />

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

          <View className="flex-row items-center space-x-4 w-3/4 mt-2">
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => setChecked(!checked)}
            />
            <TouchableOpacity>
              <Text>
                I agree to the{" "}
                <Text className="text-primary">terms & conditions</Text> and{" "}
                <Text className="text-primary">privacy policy</Text>
              </Text>
            </TouchableOpacity>
          </View>

          <View className="my-4 space-y-4">
            <TouchableOpacity onPress={() => navigation.navigate("Sign-in")}>
              <Text className="text-center">
                Already have an account?{" "}
                <Text className="font-bold text-primary">Click Here</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => registerRequest(IdNumber, email, password)}
            >
              <StyledButton title={"Sign Up"} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Container>
  );
}
