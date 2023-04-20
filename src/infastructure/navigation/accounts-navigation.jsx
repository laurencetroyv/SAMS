import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

export default function AccountsNavigation() {
  const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='null' component={null} />
        </Stack.Navigator>
  )
}
