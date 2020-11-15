import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  transparent?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, transparent, ...rest }) => (
  <Container transparent={transparent} {...rest}>
    <ButtonText transparent={transparent}>{children}</ButtonText>
  </Container>
);

export default Button;
