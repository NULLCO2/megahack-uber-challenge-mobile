import styled from 'styled-components/native';

export const Container = styled.View``;

export const SignInBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const MainLogo = styled.Text`
  padding-top: 375px;
  margin-left: 16px;
  color: white;
  font-size: 72px;
  line-height: 72px;
  font-weight: bold;
  text-align: left;
`;

export const TextLogo = styled.Text`
  margin-left: 16px;
  margin-bottom: 24px;
  color: white;
  font-size: 32px;
  line-height: 32px;
  text-align: left;
`;

export const SignUpButton = styled.TouchableOpacity`
  justify-content: center;
  height: 48px;
  align-items: center;
  background-color: rgba(103, 208, 194, 0.8);
  margin: 16px;
  padding: 8px;
  border-radius: 16px;
`;

export const SignUpButtonText = styled.Text`
  color: #fff;
  font-weight: 300;
  font-size: 18px;
`;

export const SignInButton = styled.TouchableOpacity`
  justify-content: center;
  height: 48px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 16px;
  padding: 8px;
  border-radius: 16px;
`;

export const SignInButtonText = styled.Text`
  color: #fff;
  font-weight: 300;
  font-size: 16px;
`;
