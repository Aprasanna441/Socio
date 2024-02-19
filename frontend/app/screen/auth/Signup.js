
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable,TouchableOpacity } from 'react-native';

const Login = () => {

  const [data,setData]=useState({name:"",email:"",password:"",password2:""})

  const login= async ()=>{
    const res=await fetch('http://192.168.1.4:8001/user/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)

    })
    const result=await res.json()
    console.warn("resulttt")
    console.warn(result)
  }

  
 useEffect(()=>{
// console.warn("Hi")
 },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        
        onChangeText={(text) => setData({...data,name:text})}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Password Confirm"
        secureTextEntry
     
        onChangeText={(text) => setData({...data,password2:text})}
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
};

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

export default Login;