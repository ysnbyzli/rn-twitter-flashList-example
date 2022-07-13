import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home';
import AppNavigationContainer from './src/router/AppNavigationContainer';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigationContainer />
    </NavigationContainer>
  );
};

export default App;
