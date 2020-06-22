import React, {useState, useContext} from 'react';

import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Button, Image } from 'react-native';

import AddButton from '../../shared/components/AddButton'
import Colors from '../../shared/styles/colors'

// Context
import { useCarrinho } from '../../Context/CarrinhoData'


const DetalheCesta = ({route, navigation}) => {

    // Passando info para o carrinho
    const { cestaData, setCestaData } = useCarrinho();

    const [qtd, setQtd] = useState(1);

    // Pegando info da cesta selecionanda 
    const { id } = route.params;
    const { nomeCesta } = route.params;
    const { qtdItens } = route.params;
    const { preco } = route.params;
    const { img } = route.params;

    // Pegando a qtd do componente AddButton
    const callbackQtd = (data) => {
        setQtd(data)
    }

    // Setando as info para o carrinho
    const carrinhoData = () => {
        
        let newElement = {
            id : id, 
            nome: nomeCesta, 
            preco: preco * qtd, 
            qtd: qtd,
            img: img
        }

  
        // setCestaData([...cestaData, newElement])
            
       if(Object.keys(cestaData).length === 0) {
            setCestaData([...cestaData, newElement])
       }

       else{ 
            cestaData.map((obj) => {
                if(obj.id === newElement.id){

                    const index = cestaData.findIndex(x => x.id === newElement.id);

                    let novaQTD = obj.qtd + newElement.qtd
                    
                    const newItem = {
                        id : id, 
                        nome: nomeCesta, 
                        preco: preco * novaQTD, 
                        qtd: novaQTD,
                        img: img
                    }
                    
                    const newCarrinho = (cestaData.splice(index, 1))

                    setCestaData(newCarrinho);
                    setCestaData([...cestaData, newItem])

                }

                else{
                    setCestaData([...cestaData, newElement])
                }
            })
       }
    }

    return(
        <View style={{flex: 1}}>
            
                <View style={styles.detalhes}>
                    <View style={styles.imgContainer}>
                        <Image style={styles.image} source={{uri: img}}/>
                    </View>

                    <View style={styles.textContainer}>

                        <Text style={styles.nomeText}> {nomeCesta}</Text>
                        <Text style={styles.precoText}> R${preco * qtd} </Text>
                        <Text style={styles.qtdText}>{qtdItens} Itens</Text>

                        
                        <View style={styles.bttContainer}>
                            <AddButton parentCb={callbackQtd}/>
                                
                            <TouchableOpacity style={styles.carrAdd} onPress={carrinhoData}>
                                <Text style={{color: '#fff', fontFamily: 'sans-serif-light', fontSize: 20, padding: 9}}>Adicionar ao carrinho</Text> 
                            </TouchableOpacity>
                        </View>

                    </View>
                    
                </View>

                <View style={styles.composicao}>
                    
                </View>

        </View>
    );
}


const styles = StyleSheet.create({
    detalhes:{
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        flexDirection: "row",
        marginRight: 30
    },

    imgContainer: {
        flex: 0.5,
        marginLeft: 70
    },

    textContainer: {
        flex: 1,
        marginLeft: 140,
        marginRight: 50
    },

    nomeText: {
        fontSize: 30,
        fontFamily: 'sans-serif-light',
        paddingBottom: 10
    },  

    qtdText: {
        fontSize: 20,
        fontFamily: 'sans-serif-light',
        paddingBottom: 10,
        color: '#8f8f92',
    },

    precoText: {
        fontSize: 27,
        fontFamily: 'sans-serif',
        paddingBottom: 10,
    },

    bttContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 5
    },

    carrAdd: {
        flex: 0.8,
        backgroundColor: Colors.primaryGreen,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        borderRadius: 10,
        marginLeft: 10

    },  

    image:{
        width: '190%',
        height: 190,
        resizeMode: 'contain',
    },

    composicao:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }


});

DetalheCesta.navigationOptions = {
    title: 'DetalheCesta'
}


export default DetalheCesta;