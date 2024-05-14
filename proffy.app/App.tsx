import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { SafeAreaView, View } from 'react-native';
import AppStack from './src/routes/AppStack';

SplashScreen.preventAutoHideAsync();
export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1}} onLayout={onLayoutRootView}>
      <AppStack />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}