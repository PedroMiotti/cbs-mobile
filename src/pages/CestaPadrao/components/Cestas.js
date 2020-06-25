import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

import { Button } from 'react-native-elements';

import Colors from '../../../shared/styles/colors'


const Cestas = ({img, name, price, onPress}) => {
  return (
    
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress} >
            <Image style={styles.img} source={{uri: img}}/>
            <Text style={styles.text}> {name} </Text>
            <Text style={styles.price}> R${price} </Text>
            <Button buttonStyle={{borderColor: Colors.primaryGreen, height: 40}} type="outline" title="+ Detalhes" titleStyle={{ color: Colors.primaryGreen, fontFamily: 'sans-serif-light' }} onPress={onPress}/>
        </TouchableOpacity>

  );
}

const { width } = Dimensions.get('window')

 
const styles = StyleSheet.create({
    buttonContainer:{
        width: (width - 45) / 4,
        alignItems: "center",
        margin: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff'

    },

    img: {
        width: '160%',
        height: 160,
        resizeMode: 'contain',
        
    },

    text: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,        

    },  

    price: {
        fontSize: 18,
        color: '#8f8f92',
        marginTop: 10,
        marginBottom: 20,
    },  

});


export default Cestas;

