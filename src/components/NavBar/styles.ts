import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-left: 16px;
  margin-right: 16px;
`;

export const Nav = styled.View`
  flex-direction: row;
  width: 338px;
  height: 45px;
  margin-bottom: 16px;
  border-radius: 12px;
  align-items: center;
  justify-content: space-around;
  background-color: #f0f5f8;
`;

export const NavItem = styled(FontAwesomeIcon)`
  color: #b4c3ca;
`;
