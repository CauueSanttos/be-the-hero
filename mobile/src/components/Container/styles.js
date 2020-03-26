import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;
