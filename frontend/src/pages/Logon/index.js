import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import TextInput from '~/components/TextInput';
import Button from '~/components/Button';
import FormLink from '~/components/FormLink';

import { Container, FormArea, Form } from './styles';

import logoImg from '~/assets/logo.svg';
import heroesImg from '~/assets/heroes.png';

export default function Logon() {
  return (
    <Container>
      <FormArea>
        <img src={logoImg} alt="Be The Hero" />

        <Form>
          <h1>Faça seu logon</h1>

          <TextInput placeholder="Sua ID" />
          <Button type="submit">Entrar</Button>

          <FormLink to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </FormLink>
        </Form>
      </FormArea>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
