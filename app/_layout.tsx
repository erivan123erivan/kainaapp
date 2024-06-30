import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import LogoComponent from '@/components/icons/logo';
import {
  StyleSheet,
} from "react-native";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'Euclid': require('../assets/fonts/Euclid.ttf'),
    'Okta': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const prepare = async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
        setIsLoading(false);
      }
    };
    prepare();
  }, [fontsLoaded, fontError]);
  if (isLoading) {
    return null; // Or you can render a loading spinner here
  }
  return (
    <Stack screenOptions={{
          headerStyle: {
            backgroundColor: '#F26196',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
      <Stack.Screen
        options={{
          title: "Accueil",
          headerShown: false,
        }}
        name="index"
      />
      <Stack.Screen
        options={{
          title: "Se connecter",
          headerShown: false,
        }}
        name="sign"
      />
      <Stack.Screen
        options={{
          title: "S'inscrire",
          headerShown: false,
        }}
        
        name="signup"
      />
       <Stack.Screen
        options={{
          title: "Conditions Générales et Confidentialité",
          headerShown: false,
        }}
        name="terms"
      />
       <Stack.Screen
        options={{
          title: "Se connecter",
          headerShown: false,
        }}
        name="login"
      />
       <Stack.Screen
        options={{
          title: "Aide",
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: styles.header,
          headerTintColor: "#D6D6D6", // Customize this color as needed
          headerTitle: () => <LogoComponent />,
        }}
        name="help"
      />
      <Stack.Screen
        options={{
          title: "Home",
          headerShown: false,
        }}
        name="(drawer)"
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff", // Customize this color as needed
    // Add other styles as needed
  },
});
