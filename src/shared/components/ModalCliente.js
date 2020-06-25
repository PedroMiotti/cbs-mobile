"use strict"

import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text, Dimensions, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'

// Libs
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

// Colors
import Colors from '../../shared/styles/colors';

// Context
import { useCarrinho } from '../../Context/CarrinhoData'

// API
import postPedido from '../../api/postPedido';


const ModalCliente = ({visible, onPress}) => {

    const [ pedidoPosted, setPedidoPosted ] = useState(false)
    //Input
    const [ nome, setNome ] = useState('');
    const [ obs, setObs ] = useState('');
    // Context
    const { cestaData, setCestaData } = useCarrinho();

    const post = () => {

        let cliente = {nome_cliente: nome, observacao: obs}

        postPedido(cestaData, cliente).then( setPedidoPosted(true) );

        setCestaData([]);
        setNome('');
        setObs('');
    }

    return(
        <View style={styles.Container}>
            <KeyboardAvoidingView behaviour="position" enabled>
                <Modal style={styles.modalView}  animationIn={'slideInRight'} animationOut={'slideOutRight'} isVisible={visible} customBackdrop={<TouchableWithoutFeedback onPress={onPress}><View style={{flex: 1, backgroundColor: 'black', opacity: 0.90}} /></TouchableWithoutFeedback>} backdropOpacity={0.20}>
                    <ScrollView>
                        <View style={styles.clienteContainer}>

                            <View style={styles.header}>
                                <Text style={styles.headerText}>Informações</Text>
                            </View>

                            <View style={styles.inputContainer}>

                                <TextInput
                                        label='Nome do cliente'
                                        Type='outlined'
                                        underlineColor={Colors.primaryGreen}
                                        style={styles.inputName}
                                        value={nome}
                                        onChangeText={text => setNome(text)}
                                        
                                />
                                <TextInput
                                    label='Observação'
                                    Type='outlined'
                                    multiline={true}
                                    numberOfLines={3}
                                    underlineColor={Colors.primaryGreen}
                                    value={obs}
                                    onChangeText={text => setObs(text)}
                                />
                            </View>

                            <View style={styles.buttonContainer}>

                                <TouchableOpacity style={styles.buttonFin} onPress={post}>
                                    <Text style={styles.buttonText}>Finalizar pedido</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </ScrollView>
                </Modal>
            </KeyboardAvoidingView>
        </View>

    );
}

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    Container: {
        
    },

    clienteContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },

    // position is absolute because of the KeyboardAvoidingView
    modalView: {
        position: 'absolute',
        backgroundColor: '#fff',
        height: height - 200,
        width: 0.9 * width,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,

    },

    header: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryGreen,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 55,
        
    },

    headerText: {
        color: '#fff',
        fontSize: 20
    },  

    inputContainer: {
        flex: 1,
        marginTop: 25,
        paddingHorizontal: 20,
        justifyContent: 'space-around'
    },

    inputName: {
        marginBottom: 20
    },

    buttonContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginTop: 30
    },

    buttonFin: {
        width: '20%',
        backgroundColor: Colors.primaryGreen,
        borderRadius: 20,
        height: 50,
        marginBottom: 20

    },

    buttonText: {
        textAlign: 'center',
        marginTop: 13,
        color: '#fff',
        fontSize: 17
    },
})



export default ModalCliente;
