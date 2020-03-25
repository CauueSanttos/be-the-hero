import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import TextInput from '~/components/TextInput';
import FormLink from '~/components/FormLink';
import Button from '~/components/Button';

import { Container, Content, Description, Form, InputGroup } from './styles';

import logoImg from '~/assets/logo.svg';

export default function Register() {
  return (
    <Container>
      <Content>
        <Description>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <FormLink to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Tenho cadastro
          </FormLink>
        </Description>

        <Form>
          <TextInput placeholder="Nome da ONG" />
          <TextInput type="email" placeholder="E-mail" />
          <TextInput placeholder="WhatsApp" />

          <InputGroup>
            <TextInput placeholder="Cidade" />
            <TextInput className="uf" placeholder="UF" />
          </InputGroup>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
