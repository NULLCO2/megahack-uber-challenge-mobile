import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { StatusBar, View } from 'react-native';

import AuthRoutes from './routes';

const Main: React.FC = () => (
  <NavigationContainer>
    <StatusBar
      barStyle="dark-content"
      translucent
      backgroundColor="#00000040"
    />
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <AuthRoutes />
    </View>
  </NavigationContainer>
);

export default Main;
