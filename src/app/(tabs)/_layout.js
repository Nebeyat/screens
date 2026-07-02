import { Tabs } from "expo-router";
import TaskProvider from "../../contexts/taskContexts";
import Ionicons from '@expo/vector-icons/Ionicons';
import ColorProvider, { useColors } from "../../contexts/colorContext"; 
import { SystemBars } from "react-native-edge-to-edge";
import OnBoarding from '../../components/onBoarding';
import { useState, useEffect } from 'react';
import { getItems } from "../../utils/storage";
  
  export default function layout() {
  
  

  
    const { colors, statusBarStyle } = useColors();
  
    return (
      <>
        <SystemBars style={statusBarStyle}/>
        <Tabs 
          screenOptions={{
            tabBarStyle: {
              backgroundColor: colors.background,
              borderTopWidth: 0,
              setOffset:0,
            },
            tabBarActiveTintColor: colors.accentPrimary,
            tabBarInactiveTintColor: colors.textMuted,
          }} 
        >
          <Tabs.Screen 
          name="index"
           options={{
            headerShown: false,
            tabBarIcon: ({ color,focused }) => (
             <Ionicons name={focused ? 'home':'home-outline'} size={24} color={color} />
          
      ),  }}/>
          <Tabs.Screen 
          name="category" 
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color, focused}) => (
            <Ionicons name= "grid-outline" size={24} color={color} /> 
              ), 
          }} />
          <Tabs.Screen name="favorite" options={{
            headerShown: false,
            tabBarIcon: ({ color ,focused}) => 
            <Ionicons name='timer-outline' size={24} color={color} />,
          }}/>
          <Tabs.Screen name="profile" options={{
            headerShown: false,
            tabBarIcon: ({ color ,focused}) => 
            <Ionicons name='person-outline' size={24} color={color} />,
          }}/>
        </Tabs>
        
      </>
    );
  };

  