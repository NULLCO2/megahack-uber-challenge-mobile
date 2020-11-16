import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Awards from '../pages/Awards';
import Help from '../pages/Help';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { opacity: 1, backgroundColor: 'transparent' },
      animationEnabled: false,
      gestureEnabled: true,
      gestureVelocityImpact: 0.4,
    }}
    initialRouteName="SignIn"
    mode="modal"
  >
    <App.Screen name="SignIn" component={SignIn} />
    <App.Screen name="SignUp" component={SignUp} />
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Awards" component={Awards} />
    <App.Screen name="Help" component={Help} />
  </App.Navigator>
);

export default AppRoutes;
