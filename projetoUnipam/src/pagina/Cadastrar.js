import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,TextInput,FlatList} from 'react-native';
import Lista from './System/Lista';
import firebase from './System/firebase';
import Home from './Home';
import {useNavigation} from '@react-navigation/native'

export default function Cadastrar() {
  const navigation = useNavigation();
  const [descricao,setDescricao] = useState('');
  const [marca,setMarca] = useState('');
  const [preco,setPreco] = useState('');
  const [produto,setProduto] = useState('');
  const [estoque,setEstoque] = useState('');
  const [fichaDeCompra,setFicha] = useState([]); 

  function limpaCampo(){
    setNome('');
    setpassword('');
    setEmail('');
    setCidade('');

 }

 
  useEffect(() =>{

    async function consulta(){
     
      await firebase.database().ref('FichaDeCompra').on('value',(snapshot)=>{
        setFicha([]);
        snapshot.forEach((items)=>{
            let dado = {
              key: items.key,
              descricao:items.val().Descricao,
              marca:items.val().Marca,
              preco:items.val().Preco,
              produto:items.val().Produto,
              estoque:items.val().QuantidadeEstoque,
            };
            setFicha(oldArray => [...oldArray,dado]);

        }
        )

      })
    }
    consulta();

  },[]);

  async function cadastrarMercadoria(){


    if(descricao != '' & marca != '' & preco != '' & produto != '' & estoque != '') {
      let mercadoria = await firebase.database().ref('FichaDeCompra');
      let chave = mercadoria.push().key;


      mercadoria.child(chave).set({

        Descricao: descricao,
        Marca:marca,
        Preco:parseFloat(preco),
        Produto:produto,
        QuantidadeEstoque:parseInt(estoque)



      });
    
      alert("PRODUTO CADASTRADO COM SUCESSO");
      limpaCampo();

    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo} >Formulario de Cadastramento de Mercadoria</Text>     
      <Text style={styles.tituloInput}>Digite a Descriçao: </Text>
      <TextInput style={styles.input}
      underlinecolorAndroid= "transparent"
      onChangeText={(texto) => setDescricao(texto)}
      value={descricao}
      require
      />

      <Text style={styles.tituloInput}>Digite a Marca</Text>
      <TextInput style={styles.input}
      underlinecolorAndroid= "transparent"
      onChangeText={(texto) => setMarca(texto)}
      value={marca}
      require
      />

      <Text style={styles.tituloInput}>Digite o Preço</Text>
      <TextInput style={styles.input}
      underlinecolorAndroid= "transparent"
      onChangeText={(texto) => setPreco(texto)}
      value={preco}
      placeholder= "Somente numeros com casa decimais Ex 3.14 !"
      require
      />

      <Text style={styles.tituloInput}>Digite o Produto</Text>
      <TextInput style={styles.input}
      underlinecolorAndroid= "transparent"
      onChangeText={(texto) => setProduto(texto)}
      value={produto}
      require
      />

      <Text style={styles.tituloInput}>Digite a Quantidade de Estoque</Text>
      <TextInput  style={styles.input}
      underlinecolorAndroid= "transparent"
      onChangeText={(texto) => setEstoque(texto)}
      value={estoque}
      placeholder= "Somente numeros!"
      require
      />

      <Button 
      title="Cadastrar Mercadoria"
      onPress={cadastrarMercadoria}
      
      />
  

      <FlatList
        keyExtractor={item => item.key}  
        data={fichaDeCompra}
        renderItem={ ({item}) => (<Lista dados={item} />)}
      
      />
    <Button style={styles.botaoVoltar} 
          title="Voltar"
          onPress={() => navigation.goBack()}
      
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
  titulo:{
    fontSize: 22,
    padding:25,
    fontWeight:'bold',
    margin: 10,
    textAlign:'center',
    borderWidth: 1,
    
  },
  tituloInput:{
    fontSize:20,
 
    textAlign:'center',
    margin: 10

  },
  input:{
    marginBottom: 10,
    padding:15,
    borderWidth: 1,
    borderColor: '#000000',
    height:50,
    fontSize:20


  },
  botaoVoltar:{
    backgroundColor: 'red',
    marginTop: 60,
    marginBottom: 15
  }
});