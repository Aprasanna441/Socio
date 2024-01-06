import Login from "./Login";
import Signup from "./Signup";

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginSignup = () => {
  return (
    <View>
    <Login/>
    <Signup/>
    </View>
  )
}

export default LoginSignup

const styles = StyleSheet.create({})