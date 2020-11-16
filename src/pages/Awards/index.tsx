import React from 'react';
import { Text, View } from 'react-native';

import Profile from '../../components/Profile';

import image from '../../../assets/background2.png';
import uber from '../../../assets/uber.png';

import {
  Background,
  CO2Quantity,
  CO2ResumeContainer,
  Container,
  Uber,
} from './styles';
import NavBar from '../../components/NavBar';

const Dashboard: React.FC = () => (
  <Container>
    <Background source={image}>
      <View>
        <Profile />
      </View>
      <CO2ResumeContainer>
        <Text>2.5 toneladas de CO2 foram convertidas em:</Text>
        <CO2Quantity>17.000</CO2Quantity>
        <Text>pontos</Text>
      </CO2ResumeContainer>
      <Text />
      <Text>Seus pontos podem ser utilizados nos apps:</Text>
      <Text />
      <View>
        <Uber source={uber} />
      </View>
      <NavBar />
    </Background>
  </Container>
);

export default Dashboard;
