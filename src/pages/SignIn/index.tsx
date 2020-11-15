import React from 'react';

import {
  SignInBackground,
  MainLogo,
  TextLogo,
  SignUpButton,
  SignInButton,
  SignInButtonText,
  SignUpButtonText,
} from './styles';

import image from '../../../assets/background.jpeg';

const SignIn: React.FC = () => {
  return (
    <SignInBackground source={image}>
      <MainLogo>OHNE</MainLogo>
      <TextLogo>CO2</TextLogo>
      <SignUpButton>
        <SignUpButtonText>Criar conta</SignUpButtonText>
      </SignUpButton>
      <SignInButton>
        <SignInButtonText>Já tenho conta</SignInButtonText>
      </SignInButton>
    </SignInBackground>
  );
};

export default SignIn;
