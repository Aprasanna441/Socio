import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Text,View } from 'react-native'
const Login = () => {
  const [token,setToken]=useState("")
  useEffect(()=>{
     tokenize()
  })

  const tokenize= async ()=>{
setToken(await AsyncStorage.getItem("token"))
  }
  return (
    <View>
      <Text style={{fontSize:20,margin:20}}>{token}</Text>
    <Text style={{fontSize:20,margin:20}}>Login</Text>
</View>
  )
}

export default Login