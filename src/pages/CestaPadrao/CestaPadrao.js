"use strict"

import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Colors from '../../shared/styles/colors'

// API
import getCesta from '../../api/getCesta';

// Components
import Cestas from './components/Cestas'


const CestaPadrao = ({navigation}) => {

  const [ cesta, setCesta ] = useState([]);
  

  

  useEffect(() => {

    let mounted = true;

    if(mounted){
      
      getCesta().then(data => {

        setCesta(data)
        
      });
      
    }

    return () => mounted = false;
    
  }, [])



  return (
    <ScrollView style={styles.container}>
      
        <View style={styles.filterContainer}>
          <Text>filterContainer</Text>
        </View>

        <View style={styles.cestasContainer}>
            
              {!cesta ? <Text>Nenhuma cesta cadastrada</Text> : cesta.map(cesta => 
                <Cestas key={cesta.cesta_id} img={'https://cbscestas.com.br/wp-content/uploads/2013/06/caixa-1-1.jpg'} name={cesta.cesta_nome} price={cesta.cesta_preco} onPress={() => ( navigation.navigate('DetalheCesta', {
                        id: cesta.cesta_id,
                        nomeCesta: cesta.cesta_nome,
                        qtdItens: 30,
                        preco: cesta.cesta_preco,
                        img: 'https://cbscestas.com.br/wp-content/uploads/2013/06/caixa-1-1.jpg'
                      }))}/>
              )}

              
    
        </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.lightGrey
  },

  filterContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  cestasContainer: {
    flex:1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
    
});

CestaPadrao.navigationOptions = {
    title: 'CestaPadrao'
}

export default CestaPadrao;