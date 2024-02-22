import { View, Text,Textfield } from 'react-native'
import React from 'react'
import styles from '../auth/Signup'

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      <Text>ForgetPassword</Text>
      <Textfield style={styles.input}/>

      
    </View>
  )
}

export default ForgetPassword