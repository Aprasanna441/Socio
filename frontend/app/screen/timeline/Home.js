import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Profile from '../auth/Profile'

const Drawer=createDrawerNavigator()

const Home = ({navigation}) => {
  return (
    <Drawer.Navigator screenOptions={{headerStyle:{backgroundColor:'purple'}}}>
    <Drawer.Screen name='Profile' component={Profile} />
       
   
    </Drawer.Navigator>
  )
}

export default Home