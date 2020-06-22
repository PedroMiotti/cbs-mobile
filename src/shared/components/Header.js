import React, {useState} from 'react';

import { TouchableOpacity, View } from 'react-native';
import Colors from '../../shared/styles/colors'

import { Icon } from 'react-native-elements'

import Carrinho from '../../pages/Carrinho/Carrinho'

const Header = ({}) => {
  const [carrinhoVisible, setCarrinhoVisible ] = useState(false);

    function toggleVisible(){
      setCarrinhoVisible(!carrinhoVisible);
    }

  return (
    <View>
      <TouchableOpacity onPress={toggleVisible}> 
        <Icon reverse raised reverseColor={Colors.primaryGreen} name="shopping-cart" color='#fff'/> 
      </TouchableOpacity>

      <Carrinho visible={carrinhoVisible} onPress={toggleVisible}/>

    </View>
  );
}


export default Header;