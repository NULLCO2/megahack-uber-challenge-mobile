import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  transparent?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, transparent, ...rest }) => (
  <Container transparent={transparent} {...rest}>
    <ButtonText transparent={transparent}>{children}</ButtonText>
  </Container>
);

export default Button;
