import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Button, Text, View ,Image ,Alert, ImageBackground} from 'react-native';


const Separator = () => (
  <View style={styles.separator} />
);

export default function App() {
  console.log(require("./assets/solarimg1.jpg"));

  return (
    <View style={styles.container}>
      
    
      <ImageBackground 
         // source={{uri: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'}}
         source={require("./assets/solarimg.jpg")} 
         style={{ flex: 1,
            justifyContent: "flex-end",
            height: null,
            width: null,
            alignItems: 'center' ,
            resizeMode: 'cover',
            }}
        >


    <View style={{  top:10, position:'absolute' ,  }}>

    <Image style={{width:200 , height:70 }} 
          source={require("./assets/solarlogo4.png")}
         
          />
            
       </View>

       
 </ImageBackground >
      
 <View>
          <Button 
             title="Sign in " onPress={() => alert(' Button presxsed')} />
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
    marginVertical: 0,
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
