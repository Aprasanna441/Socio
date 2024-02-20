import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/screen/timeline/NewsFeed';
import Login from './app/screen/auth/Login';
import { createRef, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import LoginSignup from './app/screen/auth/LoginSignup';
import HomeNavigator from './app/navigators/DrawerNavigator';
import DrawerNavigator from './app/navigators/DrawerNavigator';
import TabNavigator from './app/navigators/TabNavigator';
export default function App() {

 
 

  const checkToken = async () => {
    try {
      
         const storedToken = await AsyncStorage.getItem('access_token');
      if (storedToken) {
        // Token found, set the initial route to Home
        return true
      }
    } catch (error) {
      console.error('Error checking token:', error);
      return false
    }
  };
  useEffect(() => {
    // Check AsyncStorage for the token when the app starts
    checkToken();

  }, []);
  


  return (
    <NavigationContainer>
      {checkToken?
      <TabNavigator />:<LoginSignup/>}
    </NavigationContainer>
  );
}


