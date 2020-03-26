import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 24px;
  margin-bottom: 24px;
  color: #737380;
`;

export const IncidentTouchable = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IncidentTouchableText = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;
