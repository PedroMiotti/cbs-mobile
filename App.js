import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';


import Routes from './src/Routes';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
          <Routes /> 
      </NavigationContainer>
    </PaperProvider>
    
  );
}


export default App;
