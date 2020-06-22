import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Colors from '../../../shared/styles/colors'

const ListItem = ({title, imgPath, onPress}) => {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} >
        <Image source={imgPath}/>
        <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        paddingBottom:25,
        paddingTop: 35,
        borderColor: '#fff',
        borderRadius: 10,
        backgroundColor: '#fff',
        height: "55%",
        width: "20%",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: "10%",
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.9,
        elevation: 8,
        shadowRadius: 15 ,
        shadowOffset : { width:1, height: 13},
    }, 

    text: {
        color: Colors.primaryGreen,
        fontSize: 20,
        textAlign: "center"
    }
});

export default ListItem;
