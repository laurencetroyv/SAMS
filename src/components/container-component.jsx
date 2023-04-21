import React from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Container({
  children,
  enablePadding,
  enableScroll,
  enableKeyboardAvoiding,
}) {
  return (
    <SafeAreaView>
      <ScrollView scrollEnabled={enableScroll} className="flex-1">
        <KeyboardAvoidingView
          enabled={enableKeyboardAvoiding}
          contentContainerStyle={{
            flex: 1,
          }}
        >
          <View className={`${enablePadding ? "px-4" : null}`}>{children}</View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}
