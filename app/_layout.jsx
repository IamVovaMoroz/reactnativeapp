import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot } from 'expo-router'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'

SplashScreen.preventAutoHideAsync() // Preventing auto-hiding of SplashScreen



const RooyLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf')
  })

  useEffect(() => {
    if (error) throw error // Throw error if there is any font loading error


    if (fontsLoaded) {    // If all fonts are loaded successfully

      SplashScreen.hideAsync() // Hide SplashScreen

    }
  }, [fontsLoaded, error]) // Run effect when fontsLoaded or error state changes


  // if (!fontsLoaded) {
  //   return null
  // }

  if (!fontsLoaded && !error) { // If fonts are not loaded and there are no errors

    return null
  }

  return (
    <>
      <Stack>
        <Stack.Screen
          name='index'
          options={{ headerShown: false, title: 'Main page' }}
        />
      </Stack>
    </>
  )
}

export default RooyLayout
