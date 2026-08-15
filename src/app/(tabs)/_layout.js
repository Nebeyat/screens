import { Tabs } from "expo-router";
import TaskProvider from "../../contexts/taskContexts";
import Ionicons from '@expo/vector-icons/Ionicons';
import ColorProvider, { useColors } from "../../contexts/colorContext"; 
import { SystemBars } from "react-native-edge-to-edge";
import { useState, useEffect } from 'react';
import { getItems } from "../../utils/storage";
import { 
  useFonts, 
  Syne_400Regular, 
  Syne_500Medium, 
  Syne_600SemiBold, 
  Syne_700Bold, 
  Syne_800ExtraBold 
} from '@expo-google-fonts/syne'; 

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Syne_400Regular, 
    Syne_500Medium, 
    Syne_600SemiBold, 
    Syne_700Bold, 
    Syne_800ExtraBold
  });

  const { colors, statusBarStyle } = useColors();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <SystemBars style={statusBarStyle} />
      <Tabs 
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopWidth: 0,
            elevation: 0, // ✅ Correct way to remove shadow on Android
          },
          tabBarActiveTintColor: colors.accentPrimary,
          tabBarInactiveTintColor: colors.textMuted,
        }} 
      >
        <Tabs.Screen 
          name="index"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen 
          name="category" 
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'grid' : 'grid-outline'} size={24} color={color} />
            ), 
          }} 
        />
        <Tabs.Screen 
          name="favorite" 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'timer' : 'timer-outline'} size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen 
          name="profile" 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}