// Imports
import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import CestaProvider from './Context/CarrinhoData'

// Views
import Main from './pages/Main/Main';
import MontarCesta from './pages/MontarCesta/MontarCesta';
import CestaPadrao from './pages/CestaPadrao/CestaPadrao';
import DetalheCesta from './pages/DetalheCesta/DetalheCesta';
import Carrinho from './pages/Carrinho/Carrinho'

import Header from './shared/components/Header'

const Stack = createStackNavigator();

const Routes = () => {

    
    return( 
        <CestaProvider>
            <Stack.Navigator initialRouteName='Main' screenOptions={{headerStyle:{backgroundColor: '#00A650'}, headerTintColor: "#fff" , gestureEnabled: true, headerRightContainerStyle:{padding:15}, headerRight: () => ( <Header /> )}}>
                <Stack.Screen name="Main" component={Main} options={{title:""}}/>
                <Stack.Screen name="MontarCesta" component={MontarCesta} options={{title:"Monte sua cesta"}}/>
                <Stack.Screen name="CestaPadrao" component={CestaPadrao} options={{title:"Cestas Padrao"}} />
                <Stack.Screen name="DetalheCesta" component={DetalheCesta} options={{title:""}} />
                <Stack.Screen name="Carrinho" component={Carrinho} options={{title:""}} />
            </Stack.Navigator>
        </CestaProvider>
    
    );
}

export default Routes;



