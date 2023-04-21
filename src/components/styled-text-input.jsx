import { View, Text } from "react-native";
import React from "react";
import { HelperText, TextInput } from "react-native-paper";

export default function StyledTextInput({ helperMessage }) {
  return (
    <View>
      <TextInput />
      <HelperText>{helperMessage}</HelperText>
    </View>
  );
}
