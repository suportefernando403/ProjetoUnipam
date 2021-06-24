import React,{useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,Button} from 'react-native'
import {CadastrarUsuario} from "./CadastrarUsuario"
import {Cadastrar} from "./Cadastrar"
import Login from "./Login"
import firebase from "./System/firebase"

export default function Home({route}){
    const navigation = useNavigation();

    function cadastrarProduto(){
        navigation.navigate('Cadastrar');
    }
    function voltarLogin(){
        navigation.navigate('Login');
    }

    async function logout(){

        await firebase.auth().signOut();
        alert('Desligado do Sistema foi um sucesso');
        voltarLogin();
    }

    function irCadastrarUsuario(){
        navigation.navigate('CadastrarUsuario');
    }

 
    return(

        <View>
            <Text style={styles.login}>Seja Todos Bem Vindos</Text>
            <Text style={styles.TextoEmailAcessado}>Acessando nesse momento</Text>
            <Text style={styles.TextoEmailAcessado}>Email: {route.params.emailCadastrado}</Text>

            

            <Text style={styles.home}>Cadastrar Produto no Estoque</Text>
            <Button style={styles.menu}
            title="Cadastrar Produtos"
            onPress={cadastrarProduto}
           
            
            />
            <Text style={styles.home}>Cadastrar usuario para o acesso</Text>
            <Button  style={styles.menu}
                title="Usuarios"
                onPress={irCadastrarUsuario}
           />


            <Text style={styles.home}>Sair do Aplicativo</Text>
           <Button 
                title="Sair"
                onPress={logout}
           />
        </View>
    )
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    magin:20
},
home:{
    fontSize:  19,
    fontWeight:'bold',
    textAlign: 'center',
    paddingBottom:15,
    paddingTop:10
}

,
login:{


fontWeight:'bold',
fontSize:25,
marginTop: 10,
marginBottom:30,
textAlign: 'center',

}
,
menu:{
    marginTop: 30,
    marginBottom:40
},
TextoEmailAcessado:{
    textAlign:'center',
    fontSize:15,
    fontWeight:'bold',
    color:'#0000CD'
}


});