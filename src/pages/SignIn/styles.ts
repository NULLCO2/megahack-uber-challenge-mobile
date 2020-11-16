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
  font-size: 96px;
  line-height: 96px;
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
