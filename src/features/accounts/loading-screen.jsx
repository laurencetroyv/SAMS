import React from "react";
import { Container } from "../../components/components-index";
import { View } from "react-native";
import Lottie from "lottie-react-native";
export default function Loading() {
  return (
    <Container>
      <View className="flex-1 items-center justify-center">
        <Lottie
          className="w-full"
          source={require("../../assets/lottie-loading.json")}
          autoPlay
          loop
        />
      </View>
    </Container>
  );
}
