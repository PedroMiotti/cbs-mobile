"use strict"

import React from 'react';

import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';

import Colors from '../../shared/styles/colors'
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements'

import axios from 'axios';

// Components
import ListProduct from './components/ListProduct'

// Context
import { useCarrinho } from '../../Context/CarrinhoData'


const Carrinho = ({visible, onPress}) => {

    const { cestaData, setCestaData } = useCarrinho();

    let carrinhoVazio;

    (Object.keys(cestaData).length === 0 ? carrinhoVazio = true : carrinhoVazio = false)

    const deleteFromCarrinho = (id) => {
        const novoCarrinho = (cestaData.filter(x => x.id != id))
        setCestaData(novoCarrinho)
    }

    const postCarrinho = async () => {
        await axios.post('http://192.168.0.109:2333/cestas/pedido', {cestaData})

        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <View style={styles.Container}>
            <Modal style={styles.modalView}  animationIn={'slideInRight'} animationOut={'slideOutRight'} isVisible={visible} customBackdrop={<TouchableWithoutFeedback onPress={onPress}><View style={{flex: 1, backgroundColor: 'black', opacity: 0.90}} /></TouchableWithoutFeedback>} backdropOpacity={0.20}>
                <View style={styles.carrinhoContainer}>
                   <View style={styles.topBar}>
                       
                        <Icon style={styles.topBarIcon} name="shopping-cart" color={Colors.primaryGreen}/> 
                        <Text style={styles.topBarText}>Meu carrinho</Text>

                   </View>

                   <View style={styles.products}>
                   
                       <ScrollView>

                        {carrinhoVazio && <Text style={{alignSelf: 'center', marginTop: 30, color: '#8f8f92', fontSize:16, fontFamily: 'sans-serif-light'}}>Nenhuma cesta no carrinho </Text>}

                        {cestaData.map(c => 
                                <ListProduct  key={c.id} nome={c.nome} preco={c.preco} img={c.img} qtd={c.qtd} onPress={(id) => deleteFromCarrinho(c.id)}/>
                            )}

                       </ScrollView>

                   </View>

                   <View style={styles.bottomBar}>
                        <View style={styles.total}>
                            <Text style={styles.subtotalText}>Subtotal : </Text>
                            <Text style={styles.totalText}>R${cestaData.reduce((sum, i) => (sum += i.preco), 0)}</Text>
                        </View>
                        <TouchableOpacity style={styles.finalizarBtt}>
                            <Text style={{color: 'white', textAlign: 'center'}} onPress={postCarrinho}>FINALIZAR PEDIDO</Text>
                        </TouchableOpacity>
                    
                   </View>
                </View> 
            </Modal>
        </View>

    );
}



const styles = StyleSheet.create({
    
    modalView: {
        marginLeft: '68%',
        marginTop: 60,
        width: 330,
        marginBottom: 10,
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
       
    },

    carrinhoContainer:{
        flex: 1,
        
        alignItems: 'center'
    },  

    topBar:{
        flex: 0.2,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        
    },

    topBarText :{ 
        fontSize: 18,
        marginRight: 30,
        marginLeft: 18,
        fontFamily: 'sans-serif-light',
        color: '#000'
    },

    topBarIcon: {
        marginLeft: 0
    },  

    products: {
        flex: 1,
        marginTop: 15,
        width: '100%',
    },

    bottomBar: {
        flex: 0.4,
        width: '100%',
    },

    total: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#d0d0d0'
    },  

    totalText: {
        padding: 12,
        fontSize: 16,
        fontWeight: 'bold'
    },

    subtotalText: {
        padding: 12,
        fontSize: 16,
    },

    finalizarBtt: {
        flex: 1,
        backgroundColor: Colors.primaryGreen,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
    },

})

Carrinho.navigationOptions = {
    title: 'Carrinho'
    
}

export default Carrinho;
