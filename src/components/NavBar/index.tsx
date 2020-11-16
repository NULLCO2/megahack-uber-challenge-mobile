import React, { useCallback } from 'react';
import {
  faChartBar,
  faComments,
  faSignOutAlt,
  faCoins,
} from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Container, Nav, NavItem } from './styles';

fontawesome.library.add(faChartBar, faCoins, faComments, faSignOutAlt);

const NavBar: React.FC = () => {
  const navigation = useNavigation();

  const dashboard = useCallback(() => {
    navigation.navigate('Dashboard');
  }, [navigation]);

  const signIn = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);

  const awards = useCallback(() => {
    navigation.navigate('Awards');
  }, [navigation]);

  const help = useCallback(() => {
    navigation.navigate('Help');
  }, [navigation]);

  return (
    <Container>
      <Nav>
        <TouchableOpacity onPress={dashboard}>
          <NavItem icon="chart-bar" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={awards}>
          <NavItem icon="coins" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={help}>
          <NavItem icon="comments" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={signIn}>
          <NavItem icon="sign-out-alt" size={30} />
        </TouchableOpacity>
      </Nav>
    </Container>
  );
};

export default NavBar;
