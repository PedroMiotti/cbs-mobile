import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MontarCesta = () => {
  return (
    <View style={styles.container}>

        <Text>Montar Cesta </Text>
        
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
    }
});

MontarCesta.navigationOptions = {
    title: 'MontarCesta'
}

export default MontarCesta;