import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const SignInBackground = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  padding: 0 16px;
`;

export const MainLogo = styled.Text`
  color: white;
  font-size: 72px;
  line-height: 72px;
  font-weight: bold;
  text-align: left;
`;

export const TextLogo = styled.Text`
  margin-bottom: 48px;
  margin-left: 8px;
  color: white;
  font-size: 32px;
  line-height: 32px;
  text-align: left;
`;

export const SignUpButton = styled.TouchableOpacity`
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: rgba(103, 208, 194, 0.8);
  margin: 8px;
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
  margin: 8px 8px 40px 8px;
  padding: 8px;
  border-radius: 16px;
`;

export const SignInButtonText = styled.Text`
  color: #fff;
  font-weight: 300;
  font-size: 16px;
`;

export const SignInModal = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const SignInFormView = styled.View`
  width: 100%;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 16px 32px 32px 32px;
  background-color: #fff;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #0099d2;
  margin: 24px 0 32px;
`;
