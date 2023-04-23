import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar, Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function CardComponent({ time, title, icon }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Scanner")}>
      <View className="border w-full rounded-lg border-background-dark dark:border-background-white p-2 m-2">
        <View className='w-full'>
          <Text className="font-bold">{time}</Text>
          <Text>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
