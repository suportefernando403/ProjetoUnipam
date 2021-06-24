import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,TextInput,FlatList} from 'react-native';
import firebase from './System/firebase';
import {useNavigation} from '@react-navigation/native';
import Home  from './Home';

export default function Login(){

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const[user,setUser] = useState('');
    function irHome(usuarioNovo){
     navigation.navigate('Home', {
       emailCadastrado : usuarioNovo
     });
     
     }
     
    async function Logar(){
        await firebase.auth().signInWithEmailAndPassword(email,senha).
        then((value) =>{
          alert('Seja Bem Vindo: ' + value.user.email);
          setUser(value.user.email);
          irHome(value.user.email);

        }).catch((error)=>{
          alert('Algo Deu errado nesse login' + email );


          return;

        });
    }





   

        return (
            

            <View style={styles.container}>
            <Text style={styles.titulo}> FORMULARIO DE LOGIN</Text>
            

            <Text style={styles.tituloInput}>Digite o Email</Text>
            <TextInput style={styles.input}
            
            underlinecolorAndroid= "transparent"
            onChangeText={(text) => setEmail(text)}
            value={email}

            />
            <Text style={styles.tituloInput}>Digite a Senha</Text>

            <TextInput style={styles.input}     
            underlinecolorAndroid= "transparent"
            onChangeText={(text) => setSenha(text)}
                value={senha}
       
            
          />
            


            <Button style={styles.botaoLogin}
            title="Acessar Sistema" 
            onPress={Logar}

      
            
            
            />
           
           </View>

        )
    



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin:10

    },
    botaoLogin:{
      
        marginTop: 60,
        marginBottom: 15
    },
    titulo:{
        fontSize:22,
        padding:25,
        fontWeight:'bold',
        margin: 10,
        textAlign:'center'


    },
  
          tituloInput:{
            fontSize:20,
 
            textAlign:'center',
            margin: 10
        
          },
          input:{
            fontSize: 19,
           padding:20,
          fontWeight:'bold',
          margin: 10,
           textAlign:'center',
           borderWidth: 1
        
        
          },



    




});