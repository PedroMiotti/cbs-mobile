"use strict"

import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text, Dimensions, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'

// Libs
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Colors
import Colors from '../../shared/styles/colors'


const ModalCliente = ({visible, onPress}) => {

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
                                        
                                />
                                <TextInput
                                    label='Observação'
                                    Type='outlined'
                                    multiline={true}
                                    numberOfLines={3}
                                    underlineColor={Colors.primaryGreen}

                                
                                />
                            </View>

                            <View style={styles.buttonContainer}>

                                <TouchableOpacity style={styles.buttonFin}>
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
