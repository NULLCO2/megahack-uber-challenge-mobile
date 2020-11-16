import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

const Input: React.FC<TextInputProps> = ({
  autoCorrect,
  autoCapitalize,
  keyboardType,
  placeholder,
  secureTextEntry,
}) => (
  <Container>
    <TextInput
      autoCorrect={autoCorrect}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  </Container>
);

export default Input;
