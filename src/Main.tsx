import React from 'react';

import { StatusBar, View } from 'react-native';

import AppRoutes from './routes';

const Main: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor="#00000040"
    />
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <AppRoutes />
    </View>
  </>
);

export default Main;
