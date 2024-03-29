
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable,TouchableOpacity } from 'react-native';

const login= async ()=>{

  const [data,setData]=useState({email:"",password:""})

  const res=await fetch('http://192.168.1.3:8000/user/login/',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)

  })
  const result=await res.json()
  if (result.errors){
    console.warn("error has occured")
  }
  else{
     await AsyncStorage.setItem("access_token",result.token.access)
     console.warn(AsyncStorage.getItem("token"))
     navigationRef.current?.navigate('Home');
  }
 
}



const Login = () => {
 





  return (
    <View style={styles.container}>
      <Text style={styles.title}>Createe a New Account</Text>
    
      <TextInput
        style={styles.input}
        placeholder="Email"
       
        onChangeText={(text) => setData({...data,email:text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        
        onChangeText={(text) => setData({...data,password:text})}
      />
      
      
     
        <Pressable style={styles.loginButton} onPress={login} >
          <Text style={styles.loginButtontext}>SIGNUP</Text>
        </Pressable>
        <TouchableOpacity >
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
          Forget Password
        </Text>
      </TouchableOpacity>
      
    </View>
  );
}
  export default Login


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
   
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  input: {
    width: 300,
    fontSize:20,
    textAlign:'center',
    height: 'auto',
    backgroundColor:'#CDC7C5',
   borderRadius:10,
    marginBottom: 20,
    padding: 10,
  },
  loginButton:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
    margin:10
  },
  loginButtontext:{
    color:'white',
    fontWeight:'bold',
    fontSize:18
  }
});

