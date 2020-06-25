"use strict"

import React, {useState} from 'react';
import { TouchableOpacity, View } from 'react-native';

// Colors
import Colors from '../../shared/styles/colors'

// Libs
import { Icon } from 'react-native-elements'

// Components
import Carrinho from '../../pages/Carrinho/Carrinho'
import ModalCliente from '../../shared/components/ModalCliente'

const Header = () => {
  const [carrinhoVisible, setCarrinhoVisible ] = useState(false);
  const [ clienteModalVis, setClienteModalVis ] = useState(false)

    function toggleCarrinhoVisible(){
      setCarrinhoVisible(!carrinhoVisible);
    }
    
    function toggleClienteVisible() {
      setClienteModalVis(!clienteModalVis)

    }

    // Pegando a visibilidade da modal Clinte do Child Carrinho
    const callbackViz = (data) => {
      setClienteModalVis(data)
    }

 
  return (
    <View>
      <TouchableOpacity onPress={toggleCarrinhoVisible}> 
        <Icon reverse raised reverseColor={Colors.primaryGreen} name="shopping-cart" color='#fff'/> 
      </TouchableOpacity>

      <Carrinho visible={carrinhoVisible} onPress={toggleCarrinhoVisible} parentCb={callbackViz}/>
      <ModalCliente visible={clienteModalVis} onPress={toggleClienteVisible}></ModalCliente>

    </View>
  );
}


export default Header;