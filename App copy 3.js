import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View ,Image ,Alert, ImageBackground} from 'react-native';


const Separator = () => (
  <View style={styles.separator} />
);

export default function App() {
  console.log(require("./assets/solarpanel.jpeg"));

  return (
    <View style={styles.container}>
      
    
     <Image style={{width:250 , height:250 }} 
          source={require("./assets/solarpanel.jpeg")}
         
          />
          
      <View>
      <Button title="Sign in " onPress={() => alert(' Button presxsed')} />
      </View>
      <Separator />
      <View>
      <Button title="Register" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
    //backgroundColor: 'red',
    //alignItems: 'cente1r',
    //justifyContent: 'center',
  },
  image : {
    backgroundColor:"white" , 
    color : "green"
  },
  textField : {
    backgroundColor:"white" , 
    color : "green"
  },
  textField1 : {
    backgroundColor:"white" , 
    color : "greenyellow"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    //borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
