import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  const signUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  const dashboard = useCallback(() => {
    setModalVisible(false);
    navigation.navigate('Dashboard');
  }, [navigation]);

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []);

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
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="E-mail"
            />
            <Input secureTextEntry placeholder="Senha" />

            <Button onPress={dashboard}>Entrar</Button>
          </SignInFormView>
        </SignInModal>
      </Modal>
      <SignInBackground source={image}>
        <MainLogo>NULL</MainLogo>
        <TextLogo>CO2</TextLogo>
        <Button onPress={signUp}>Criar conta</Button>
        <Button transparent onPress={openModal}>
          Já tenho conta
        </Button>
      </SignInBackground>
    </Container>
  );
};

export default SignIn;
