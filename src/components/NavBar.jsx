import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const NavBar = () => {
    
  return (
    <View style={styles.container}>
      <Image 
      source={require('../../assets/icon.png')}
      style={styles.image}
      />
      <Text style={styles.text}>TODO</Text>
    </View>
  )
}

export default NavBar

const styles=StyleSheet.create({
    container:{
        position:'absolute',
        top:0,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'black',
        width:'100%',
        padding:20,
        gap:10        // height:'5%'
    },
    image:{
        height:50,
        width:50,
    },
    text:{
        fontSize:30,
        fontWeight:'700',
        color:'white'
    }
})