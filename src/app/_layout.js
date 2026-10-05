import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ConvexProvider, ConvexReactClient } from "convex/react";

import TaskProvider from "../contexts/taskContexts";
import ColorProvider from "../contexts/colorContext";
import useTheme from "../store/useTheme"; // ✅ Correct 1 level up to src/store

const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL || "https://placeholder.convex.cloud";
const convex = new ConvexReactClient(convexUrl);

export default function RootLayout() {
  const { themeMode } = useTheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ConvexProvider client={convex}>
        <ColorProvider>
          <TaskProvider>
            <StatusBar style={themeMode === "dark" ? "light" : "dark"} />
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="article/[id]" />
            </Stack>
          </TaskProvider>
        </ColorProvider>
      </ConvexProvider>
    </GestureHandlerRootView>
  );
}