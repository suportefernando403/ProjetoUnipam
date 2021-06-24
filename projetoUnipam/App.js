import React,{useState,useEffect} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  TextInput} from 'react-native';


import Cadastrar from './src/pagina/Cadastrar';
import Home from './src/pagina/Home';
import Login from './src/pagina/Login';
import CadastrarUsuario from "./src/pagina/CadastrarUsuario";



import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();
export default function App() {
 

  return (
<NavigationContainer>
      <Stack.Navigator>
     
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Cadastrar" component={Cadastrar} />
              <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} />
      </Stack.Navigator>

</NavigationContainer>
  )
}

const styles = StyleSheet.create({
container: {
flex: 1,
magin:20


}


  
});
