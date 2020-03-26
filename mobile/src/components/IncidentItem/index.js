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

export default function IncidentItem({ incident }) {
  const navigation = useNavigation();

  function handleNavigateToDetail(incidentParam) {
    navigation.navigate('Detail', { incident: incidentParam });
  }

  return (
    <Container>
      <IncidentProperty>ONG:</IncidentProperty>
      <IncidentValue>{incident.name}</IncidentValue>

      <IncidentProperty>CASO:</IncidentProperty>
      <IncidentValue>{incident.title}</IncidentValue>

      <IncidentProperty>VALOR:</IncidentProperty>
      <IncidentValue>{incident.valueFormatted}</IncidentValue>

      <IncidentTouchable onPress={() => handleNavigateToDetail(incident)}>
        <IncidentTouchableText>Ver mais detalhes</IncidentTouchableText>
        <Feather name="arrow-right" size={16} color="#e02041" />
      </IncidentTouchable>
    </Container>
  );
}
