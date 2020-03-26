import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  IncidentProperty,
  IncidentValue,
  IncidentTouchable,
  IncidentTouchableText,
} from './styles';

export default function IncidentItem() {
  const navigation = useNavigation();

  function handleNavigateToDetail() {
    navigation.navigate('Detail');
  }

  return (
    <Container>
      <IncidentProperty>ONG:</IncidentProperty>
      <IncidentValue>APAD</IncidentValue>

      <IncidentProperty>CASO:</IncidentProperty>
      <IncidentValue>Cadelinha atropelada</IncidentValue>

      <IncidentProperty>VALOR:</IncidentProperty>
      <IncidentValue>R$ 120,00</IncidentValue>

      <IncidentTouchable onPress={handleNavigateToDetail}>
        <IncidentTouchableText>Ver mais detalhes</IncidentTouchableText>
        <Feather name="arrow-right" size={16} color="#e02041" />
      </IncidentTouchable>
    </Container>
  );
}
