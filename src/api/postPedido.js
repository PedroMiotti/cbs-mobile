"use strict"

import axios from 'axios';

export default async function postPedido(cestas, cliente){
    let data;
    await axios.post('http://192.168.0.109:2333/cestas/pedido', {cestas, cliente})
        
        .then(res => {
            data = res;
        })

        .catch(err => {
            throw new error(err)
        })

        return data;
}

