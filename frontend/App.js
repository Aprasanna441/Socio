import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator()
import Home from './app/screen/timeline/Home';
import Login from './app/screen/auth/Login';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function App() {
  const [initialRoute, setInitialRoute] = useState('Login');
  
 

  const checkToken = async () => {
    try {
      // await AsyncStorage.setItem("token","Namaste")
      // Retrieve the token from AsyncStorage
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        // Token found, set the initial route to Home
        setInitialRoute('Home');
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
   
<NavigationContainer>
  <Stack.Navigator initialRouteName={initialRoute}>
    
  <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
  <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    


  </Stack.Navigator>
</NavigationContainer>

  );
}

