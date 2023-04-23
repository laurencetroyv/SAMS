import React from "react";
import { View } from "react-native";
import { ProgressBar, Text } from "react-native-paper";
import colors from "../infrastructure/themes/colors";

export default function ProgressCard({ title, time, percent }) {
  return (
    <View className="m-2 p-2 border rounded-lg border-background-dark dark:border-background-white items-center space-y-2">
      <View>
        <Text className="font-bold">{title}</Text>
        <Text>{time}</Text>
      </View>

      <ProgressBar progress={1} color={colors.primary} className='bg-pink-400' />

      <View className="flex-row">
        <Text>{percent}</Text>
        <View className="flex-grow" />
        <Text>100%</Text>
      </View>
    </View>
  );
}
