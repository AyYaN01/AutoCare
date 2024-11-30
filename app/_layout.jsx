import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import { Slot, SplashScreen, Stack } from 'expo-router'
import {useFonts} from 'expo-font'
import "../global.css";
import { useEffect } from 'react';
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "SF-Bold" : require("../assets/fonts/SF-Pro-Display-Bold.ttf"),
    "SF-SemiBold" : require("../assets/fonts/SF-Pro-Display-Semibold.ttf"),
    "SF-Regular" : require("../assets/fonts/SF-Pro-Display-Regular.ttf"),

  })
  useEffect(() => {
    if(error) throw error

    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null;

  return (
   <Stack>
     <Stack.Screen name='index' options={{headerShown:false}}/>
     <Stack.Screen name='(auth)' options={{headerShown:false}}/>
     <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
   </Stack> 
  )
}

export default RootLayout