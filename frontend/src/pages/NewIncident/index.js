import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import TextInput from '~/components/TextInput';
import TextArea from '~/components/TextArea';
import FormLink from '~/components/FormLink';
import Button from '~/components/Button';

import { Container, Content, Description, Form } from './styles';

import logoImg from '~/assets/logo.svg';

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <Description>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <FormLink to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </FormLink>
        </Description>

        <Form>
          <TextInput placeholder="Título do caso" />
          <TextArea textarea placeholder="Descrição" />
          <TextInput placeholder="Valor em reais" />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
