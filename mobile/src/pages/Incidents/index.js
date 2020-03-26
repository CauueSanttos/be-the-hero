import React from 'react';

import IncidentItem from '~/components/IncidentItem';

import {
  Container,
  Header,
  HeaderText,
  HeaderStrongText,
  Logo,
  Title,
  Description,
  IncidentList,
} from './styles';

import logoImg from '~/assets/logo.png';

export default function Incidents() {
  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <HeaderText>
          Total de <HeaderStrongText>0 casos</HeaderStrongText>.
        </HeaderText>
      </Header>

      <Title>Bem-vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList
        data={[1, 2, 3]}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => <IncidentItem />}
      />
    </Container>
  );
}
