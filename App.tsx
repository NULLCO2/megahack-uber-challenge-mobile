import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Main';

const App: React.FC = () => (
  <NavigationContainer>
    <Main />
  </NavigationContainer>
);

export default App;
