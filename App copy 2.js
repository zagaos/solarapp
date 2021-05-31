import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:"red" , width: 100 , height:70}}>

          
      </View>
      <View style={{backgroundColor:"green" ,flex:1}}>


    </View>
    <View style={{backgroundColor:"blue" ,flex:1}}>


    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //backgroundColor: 'red',
    alignItems: 'cente1r',
    justifyContent: 'center',
  },
  textField : {
    backgroundColor:"white" , 
    color : "green"
  },
  textField1 : {
    backgroundColor:"white" , 
    color : "greenyellow"
  },

});
