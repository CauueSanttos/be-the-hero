import styled from 'styled-components/native';

export const Logo = styled.Image``;

export const TouchableHeader = styled.TouchableOpacity``;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
  margin-top: 48px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  margin-top: 24px;
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: #737380;
`;

export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
  background-color: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
