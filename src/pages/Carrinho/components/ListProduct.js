import React from 'react';

import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../../shared/styles/colors'

import { ListItem, Icon } from 'react-native-elements'



const ListProduct = ({nome, preco, qtd, img, onPress}) => {
    return(
        <View style={styles.container}>

            <ListItem title={nome}
                    subtitle={<Text style={{color: '#8f8f92', fontSize: 16,fontFamily: 'sans-serif-light'}}>R${preco} | Qtd. {qtd} </Text>} 
                    leftAvatar={{rounded: false, source: {uri: img } }} 
                    rightIcon={<TouchableOpacity onPress={onPress}><Icon name="delete" color={Colors.paleteRed}/></TouchableOpacity>  } 
                    bottomDivider />
        </View>
    );
}


const styles = StyleSheet.create({ 

    
});


export default ListProduct;