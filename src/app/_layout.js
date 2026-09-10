import { Slot } from 'expo-router';
import TaskProvider from "../contexts/taskContexts";
import ColorProvider from "../contexts/colorContext"; 
import { useState, useEffect } from 'react';
import { getItems, setItems } from "../utils/storage";
import OnBoarding from '../components/onBoarding';
import { useFonts, Righteous_400Regular } from '@expo-google-fonts/righteous';
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Righteous_400Regular
  });
  const [showOnBoarding, setShowOnBoarding] = useState(false);

  const checkOnBoardingStatus = async () => {
    try {
      const onboardingCompleted = await getItems('onboardingcompleted');
      setShowOnBoarding(onboardingCompleted !== 'true');
    } catch (error) {
      console.error('Error checking onboarding status:', error);
    }
  };

  useEffect(() => {
    checkOnBoardingStatus();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  if (showOnBoarding) {
    return (
      <OnBoarding onFinish={async () => {
        await setItems('onboardingcompleted', 'true');
        setShowOnBoarding(false);
      }} />
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ConvexProvider client={convex}>
        <ColorProvider>
          <TaskProvider>
            <Slot />
          </TaskProvider>
        </ColorProvider>
      </ConvexProvider>
    </GestureHandlerRootView>
  );
}