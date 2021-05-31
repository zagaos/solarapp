import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Button,TextInput, Text, View ,Image ,Alert, ImageBackground} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const Separator = () => (
  <View style={styles.separator} />
);
function HomeScreen({navigation }) {
  return (
    <View style={styles.container}>
      
    
      <ImageBackground 
         // source={{uri: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'}}
         source={require("./assets/solar-img6.jpg")} 
         style={{ flex: 1,
            justifyContent: "flex-end",
            height: null,
            width: null,
            alignItems: 'center' ,
            resizeMode: 'cover',
            }}
        >


    <View style={{  top:0, position:'absolute' ,  }}>

    <Image style={{width:200 , height:44 }} 
          source={require("./assets/solarlogo4.png")}
         
          />
            
       </View>

       
 </ImageBackground >
      
 <View>
          <Button 
             title="Sign in " onPress={() => navigation.navigate('Login')}
              />
      </View>
      <Separator />
      <View>
      <Button
        title="Registration"
        onPress={() => navigation.navigate('Registration')}
      />
      </View>

    </View>
  );
}
const Registration = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Registration</Text>
      <Button
        title="Go to home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};
const Login = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text  style={styles.titleText} >Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        keyboardType="numeric"
      />
      <Text>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Address"
        keyboardType="numeric"
      />      
      <Text>City</Text>
      <TextInput
        style={styles.input}
        placeholder="City"
        keyboardType="numeric"
      />      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Registration" component={Registration} />
      </Stack.Navigator>    
      </NavigationContainer>
  );
};

export default App;

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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
