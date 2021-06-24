import React,{useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,Button,TextInput} from 'react-native';
import firebase from './System/firebase';


export default function CadastrarUsuario(){
 const [nome,setNome] = useState('');
 const [password,setpassword] = useState('');
 const[Email,setEmail] = useState('');
 const[cidade, setCidade] = useState('');

 function limpaCampo(){
    setNome('');
    setpassword('');
    setEmail('');
    setCidade('');

 }

 async function CadastrarLogin(){
    if(nome !='' & cidade != ''){
        let login = await firebase.database().ref('Login');
        let chave = login.push().key;

        login.child(chave).set({
            Cidade: cidade,
            Nome: nome
        });
     
     

    }
}

    async function cadastrarUsuario(){
        await firebase.auth().createUserWithEmailAndPassword(Email, password).
        then((value)=>{
            alert('Usuario Criado com Sucesso: '+ value.user.email) ;
            CadastrarLogin();
            limpaCampo();
            return;

        }).catch((error)=>{
            if(error.code === 'auth/weak-password'){
                alert("Sua senha deve ter pelo menos 6 caracteres");
                return;

            }
            if(error.code === 'auth/invalid-email'){
                alert("Email esta errado. Tenta novamente");
                return;

            }   

            else{
            alert('Houve algum error ao logar');
            return;

            }


        });
    }
 

     return (

        <View style={styles.container}>
            <Text style={styles.texto}>CADASTRAR USUARIOS</Text>
                <Text  style={styles.tituloInput}> Cadastro de Nome </Text>
                <TextInput 
                style={styles.input}
                underlinecolorAndroid= "transparent"
                onChangeText={(text) => setNome(text)}
                value={nome}
                />
                <Text style={styles.tituloInput}>Digita a Email</Text>
                <TextInput 
                style={styles.input}
                underlinecolorAndroid= "transparent"
                onChangeText={(text) => setEmail(text)}
                value={Email}
                />

                <Text style={styles.tituloInput} >Digita a Senha</Text>
                <TextInput 
                style={styles.input}
                underlinecolorAndroid= "transparent"
                onChangeText={(text) => setpassword(text)}
                value={password}
                />
                <Text style={styles.tituloInput}>Digita a Cidade</Text>
                <TextInput 
                style={styles.input}
                underlinecolorAndroid= "transparent"
                onChangeText={(text) => setCidade(text)}
                value={cidade}
                />


                <Button 
                title="Cadastar Usuario"
                onPress={cadastrarUsuario}                
                />
        </View>



     )
}

const styles = StyleSheet.create({
    container: {},
    texto:{
        fontSize: 22,
        padding:25,
        fontWeight:'bold',
        margin: 10,
        textAlign:'center'
    },
    input:{
        marginBottom: 10,
        padding:15,
        borderWidth: 1,
        borderColor: '#000000',
        height:50,
        fontSize:20
    
    
      },
      tituloInput:{
        fontSize:20,
     
        textAlign:'center',
        margin: 10
    
      },


})