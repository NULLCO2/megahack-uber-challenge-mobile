import React from 'react';
import { Text, View } from 'react-native';

import Profile from '../../components/Profile';

import image from '../../../assets/background2.png';

import { Background, HelpContainer, Container } from './styles';
import NavBar from '../../components/NavBar';

const Dashboard: React.FC = () => (
  <Container>
    <Background source={image}>
      <View style={{ alignItems: 'center' }}>
        <Profile />
      </View>
      <HelpContainer>
        <Text style={{ fontWeight: '700', fontSize: 18, marginTop: 16 }}>
          FAQ:
        </Text>
        <Text style={{ fontWeight: '700', marginTop: 10 }}>
          1. Como funciona?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad
          repellendus quas assumenda voluptatem eius recusandae corporis magni
          enim quam labore, est, rem ipsa. Repellendus veritatis eum mollitia
          repellat quas?
        </Text>
        <Text style={{ fontWeight: '700', marginTop: 10 }}>
          2. Como conectar e medir?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          distinctio ipsam dolore aspernatur minima vitae laudantium expedita ab
          mollitia incidunt veritatis ipsum, eligendi, error quibusdam illo
          pariatur animi saepe illum.
        </Text>
        <Text style={{ fontWeight: '700', marginTop: 10 }}>
          3. Quais são minhas recompensas?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          earum sed incidunt, labore perspiciatis dolore. Corrupti, placeat
          dicta voluptate neque, quidem illum, quia necessitatibus in cupiditate
          porro libero vel voluptatibus?
        </Text>
      </HelpContainer>
    </Background>
    <View style={{ alignItems: 'center' }}>
      <NavBar />
    </View>
  </Container>
);

export default Dashboard;
