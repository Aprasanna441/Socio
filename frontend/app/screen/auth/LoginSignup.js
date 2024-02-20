import Login from "./Login";
import Signup from "./Signup";

import { StyleSheet, Text, View, Button, Pressable, Image, KeyboardA ,StatusBar} from 'react-native'
import React, { useState } from 'react'


const LoginSignup = () => {

  const [component,toggleComponent]=useState(true)

  const onToggle = () => {
     toggleComponent(!component)
  }
  return (
    // <KeyboardAwareScrollView>
    <View style={styles.container}>
     <StatusBar translucent backgroundColor="grey" barStyle="dark-content"  hidden={false} />
     {/* Image */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../../images/cover1.jpg')} />
      <Text style={{fontWeight:'bold',textAlign:'center',textShadowColor:'red',fontSize:25,color:'red'}}>Socio</Text>
      </View>



      <View style={styles.componentContainer}>

 {/* selection radio button */}
 <View style={styles.radioButtonContainer}>

  {component?
          <Pressable style={styles.radioButton} onPress={onToggle}>
            <Text style={styles.radioButtontext}>LOGIN INSTEAD ?</Text>
          </Pressable>:
          <Pressable style={styles.radioButton} onPress={onToggle}>
            <Text style={styles.radioButtontext}>SIGNUP INSTEAD ?</Text>
          </Pressable>
}
        </View>
       {component?<Signup/>:<Login/>}       
      </View>

    </View>
    // </KeyboardAwareScrollView>

  )

}



export default LoginSignup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    

  },
  imageContainer: {
    flex: 2

  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // or 'contain' or 'stretch' or 'center'
    borderRadius: 10,
  },
  componentContainer: {
    flex: 8,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 10,



  },
  radioButton: {
    alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,

    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    margin: 10
  },
  radioButtontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  radioButtonContainer: {
    flex: 0.3,
   
    
    alignItems: 'center',
    flexDirection: 'row',





  }
})