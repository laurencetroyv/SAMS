import { View, Text } from "react-native";
import React from "react";
import { HelperText, TextInput } from "react-native-paper";

export default function StyledTextInput({
  label,
  autoCapitalize = "words",
  autoComplete = "off",
  autoCorrect = false,
  editable = true,
  importantForAutofill = "yes",
  inputMode = "text",
  keyboardType = "default",
  maxLength = 32,
  onChangeText,
  onEndEditing,
  placeholder,
  secureTextEntry,
  textContentType,
  left,
  right,
  showHelper = false,
  helperMessage,
}) {
  return (
    <View className="my-2">
      <TextInput
        mode="outlined"
        label={label}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        caretHidden={true}
        editable={editable}
        enablesReturnKeyAutomatically={true}
        importantForAutofill={importantForAutofill}
        inputMode={inputMode}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        textContentType={textContentType}
        left={left}
        right={right}
        error={showHelper}
      />
      {showHelper && <HelperText>{helperMessage}</HelperText>}
    </View>
  );
}
