import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textField} >My Soalr App</Text>
      <Text style={styles.textField1} >Welcome to solar house</Text>
      <Text style={styles.textField} >My Soalr App</Text>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    backgroundColor: 'red',
    alignItems: 'center',
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
