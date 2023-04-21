import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Container({
  children,
  enablePadding = true,
  enableScroll = true,
  enableKeyboardAvoiding = true,
}) {
  return (
    <SafeAreaView className="flex-1 bg-background-white dark:bg-background-dark">
      <KeyboardAvoidingView
        enabled={enableKeyboardAvoiding}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          scrollEnabled={enableScroll}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View className={`flex-1 ${enablePadding ? "p-4" : null}`}>
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
