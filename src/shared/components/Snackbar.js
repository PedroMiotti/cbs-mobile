"use strict"

import React, {useState} from 'react';

import { Snackbar } from 'react-native-paper';


import Colors from '../../shared/styles/colors'


const Carrinho = ({visible, msg, onDismiss}) => {

   
    const [ snackVisible, setSnackVisible ] = useState(visible);

    

    return(
        
        <Snackbar 
            visible={snackVisible} 
            onDismiss={onDismiss} 
            style={{backgroundColor: Colors.primaryGreen}}
            duration={3000}
            >
                {msg}
        </Snackbar>
                   

    );
}


export default Carrinho;
