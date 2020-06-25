"use strict"

import axios from 'axios';

export default async function getCestas(){

    let data = null;

    await axios.get('http://192.168.0.109:2333/cestas')
        .then(res => {

            data = res.data;
            

        })
        .catch(err => {
    
            data = err;
            

        })

    return ( data || []);
      
}

