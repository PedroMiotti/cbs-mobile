import React from 'react';
import { StyleSheet, View } from 'react-native';

import ListItem from './components/ListItem'


const Main = ({navigation}) => {

  function handlePress(path){
    navigation.navigate(path)
  }


  return (
    <View style={styles.container}>
        <ListItem title={"Escolher Cesta"} imgPath={require('../../../assets/icons/caixa.png')} onPress={() => (handlePress('CestaPadrao'))}/> 
        <ListItem title={"Montar Cesta"} imgPath={require('../../../assets/icons/caixaAberta.png')} onPress={() => (handlePress('MontarCesta'))}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: "space-around",
        justifyContent: "center",
        backgroundColor:"#fff"

    }
});

export default Main;