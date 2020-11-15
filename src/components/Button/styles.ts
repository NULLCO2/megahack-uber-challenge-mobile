import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  transparent?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: 48px;
  border-radius: 16px;
  margin-bottom: 16px;

  background-color: #97f8f8cc;

  justify-content: center;
  align-items: center;

  ${props =>
    props.transparent &&
    css`
      background-color: #00000070;
    `}
`;

export const ButtonText = styled.Text<ButtonProps>`
  color: #000;
  font-weight: bold;
  font-size: 16px;

  ${props =>
    props.transparent &&
    css`
      color: #fff;
      font-weight: 400;
    `}
`;
