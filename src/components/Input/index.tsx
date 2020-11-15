import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => (
  <Container>
    <TextInput keyboardAppearance="dark" placeholder={placeholder} />
  </Container>
);

export default Input;
