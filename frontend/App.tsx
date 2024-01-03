import React from "react";
import { StyleSheet, View, Text,ScrollView } from "react-native";
 
const App= () => {
  return (
    <View  style={styles.main}>
     
      <Text >Namaste nepal.Trying reacr native in ubuntu</Text>
      <Text>I am also Prasanna Acharya</Text>
    </View>
  );
};

const styles=StyleSheet.create({
  main:{
    backgroundColor:'red',
  
  }

})
export default App;