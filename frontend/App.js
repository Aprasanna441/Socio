import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/screen/timeline/Home';
import Login from './app/screen/auth/Login';
import { createRef, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import LoginSignup from './app/screen/auth/LoginSignup';

const Stack=createNativeStackNavigator()


const navigationRef=React.createRef()
export default function App() {

 
 

  const checkToken = async () => {
    try {
      await AsyncStorage.removeItem("token")
         const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        // Token found, set the initial route to Home
        navigationRef.current?.navigate('Home');
      }
    } catch (error) {
      console.error('Error checking token:', error);
    }
  };
  useEffect(() => {
    // Check AsyncStorage for the token when the app starts
    checkToken();

  }, []);
  



  return (
   
<NavigationContainer ref={navigationRef}>
  <Stack.Navigator >
    
  <Stack.Screen name="LoginSignup" component={LoginSignup} options={{headerShown:false}}/>
  <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    


  </Stack.Navigator>
</NavigationContainer>

  );
}

