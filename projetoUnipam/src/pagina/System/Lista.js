import React from 'react';
import { View,StyleSheet,Text } from 'react-native';



export default function Lista({dados}){


    let QEstoque = dados.preco * dados.estoque;
    return(

        <View style={styles.container}>


            <Text style={styles.texto}>DESCRICAO: {dados.descricao}</Text>
            <Text style={styles.texto}>MARCA: {dados.marca}</Text>
            <Text style={styles.texto}>PREÇO R${dados.preco}</Text>
            <Text style={styles.texto}>PRODUTO: {dados.produto}</Text>
            <Text style={styles.texto}>ESTOQUE {dados.estoque}</Text>
            <Text style={styles.texto}>VALOR TOTAL DO ESTOQUE: R${QEstoque.toFixed(2)}</Text>
        </View>
    )

  


}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        padding: 30,
        backgroundColor: '#2F4F4F'
    },
    texto:{
        color: '#00FA9A',
        fontSize: 18
    }
});
