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

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('/incidents', {
      params: { page },
    });

    const data = response.data.map(incidentRes => ({
      ...incidentRes,
      valueFormatted: formatPrice(incidentRes.value),
    }));

    setIncidents([...incidents, ...data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => <IncidentItem incident={item} />}
      />
    </Container>
  );
}
