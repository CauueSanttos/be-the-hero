import React from 'react';
import { Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Container from '~/components/Container';
import Header from '~/components/Header';

import {
  Logo,
  TouchableHeader,
  Incident,
  IncidentProperty,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText,
} from './styles';

import logoImg from '~/assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();
  const message =
    'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$ 120,00';

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: ['cauesantos@unidavi.edu.br'],
      body: message,
    });
  }

  function handleSendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=5547997523571&text=${message}`);
  }

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />

        <TouchableHeader onPress={handleGoBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableHeader>
      </Header>

      <Incident>
        <IncidentProperty style={{ marginTop: 0 }}>ONG:</IncidentProperty>
        <IncidentValue>APAD</IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>Cadelinha atropelada</IncidentValue>

        <IncidentProperty>VALOR:</IncidentProperty>
        <IncidentValue>R$ 120,00</IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>

        <Actions>
          <Action onPress={handleSendWhatsApp}>
            <ActionText>WhatsApp</ActionText>
          </Action>

          <Action onPress={handleSendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
