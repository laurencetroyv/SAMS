import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Dashboard from "../../features/dashboard/dashboard-screen";
import Scanner from "../../features/dashboard/scanner-screen";

const DashboardScreen = () => <Dashboard />;
const ScannerScreen = () => <Scanner />;

export default function AppNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Scanner" component={ScannerScreen} />
    </Stack.Navigator>
  );
}
