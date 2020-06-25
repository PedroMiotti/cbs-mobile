"use strict"

import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text } from 'react-native';

// Colors
import Colors from '../styles/colors'

// Libs
import { Icon } from 'react-native-elements'


const AddButton = ({parentCb}) => {

    const [item, setItem] = useState(1);

    const add = () => {
        setItem(item + 1);
        parentCb(item + 1)

    }

    const minus = () => {
        if(item > 1){
            setItem(item - 1)
            parentCb(item - 1)
            
        }
    
    }

    return(
        <View style={styles.container}>
            
            <TouchableOpacity  onPress={minus}>  
                <Icon name="remove-circle-outline" size={32} color={Colors.primaryGreen}/>
            </TouchableOpacity>
            
            <Text style={styles.text}>{item}</Text>

            <TouchableOpacity  onPress={add}> 
                <Icon name="add-circle-outline" size={32} color={Colors.primaryGreen}/>
            </TouchableOpacity>
            
        </View>
    );
}


const styles = StyleSheet.create({ 
    container: {
        flex: 0.5,
        flexDirection: 'row',
        borderColor: Colors.primaryGreen,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
        
    },

    
    text: {
        fontSize: 28,
        fontFamily: 'sans-serif-light',
        margin: 20,
    },

});


export default AddButton;