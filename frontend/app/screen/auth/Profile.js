import React from 'react'
import { Text,View,StyleSheet,Image } from 'react-native'
const Profile = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
               <View style={styles.profilePictureContainer} >
           <Image style={styles.profilePicture}  source={require('../../../images/cover1.jpg')}/>
       </View>
       <View style={styles.followerSection}>
<Text>Hellof
  
</Text>
       </View>
       </View>
    </View>
  )
}

const styles=StyleSheet.create({
main:{
    backgroundColor:'red'
},
container:{
  flex:1,
  flexDirection:'row',
}
,profilePictureContainer:{
 
  flex:0.5,
  backgroundColor:'red',
 
 

},
profilePicture:{
borderRadius:100,

 
   
},
followerSection:{
  flex:3
},

})

export default Profile