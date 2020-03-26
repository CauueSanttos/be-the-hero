import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import { formatPrice } from '~/utils/format';

import Container from '~/components/Container';
import Header from '~/components/Header';
import IncidentItem from '~/components/IncidentItem';

import {
  HeaderText,
  HeaderStrongText,
  Logo,
  Title,
  Description,
  IncidentList,
} from './styles';

import logoImg from '~/assets/logo.png';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  async function loadIncidents() {
    const response = await api.get('/incidents');

    const data = response.data.map(incidentRes => ({
      ...incidentRes,
      valueFormatted: formatPrice(incidentRes.value),
    }));

    setIncidents(data);
    setTotal(response.headers['x-total-count']);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <HeaderText>
          Total de <HeaderStrongText>{total} casos</HeaderStrongText>.
        </HeaderText>
      </Header>

      <Title>Bem-vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <IncidentItem incident={item} />}
      />
    </Container>
  );
}
