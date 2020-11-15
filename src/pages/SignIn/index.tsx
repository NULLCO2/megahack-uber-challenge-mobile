import React, { useState } from 'react';

import { Modal } from 'react-native';

import image from '../../../assets/background.jpeg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  SignInBackground,
  MainLogo,
  TextLogo,
  SignInModal,
  SignInFormView,
  Title,
} from './styles';

const SignIn: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SignInModal>
          <SignInFormView>
            <Title>Faça seu login</Title>
            <Input name="email" placeholder="E-mail" />
            <Input name="password" placeholder="Senha" />

            <Button>Entrar</Button>
          </SignInFormView>
        </SignInModal>
      </Modal>
      <SignInBackground source={image}>
        <MainLogo>NULL</MainLogo>
        <TextLogo>CO2</TextLogo>
        <Button>Criar conta</Button>
        <Button transparent onPress={() => setModalVisible(true)}>
          Já tenho conta
        </Button>
      </SignInBackground>
    </Container>
  );
};

export default SignIn;
