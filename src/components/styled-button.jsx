import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default function StyledButton({ title }) {
  return (
    <View className='my-4'>
      <Button mode="contained">{title}</Button>
    </View>
  );
}
