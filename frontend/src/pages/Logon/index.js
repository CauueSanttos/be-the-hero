import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '~/services/api';

import TextInput from '~/components/TextInput';
import Button from '~/components/Button';
import FormLink from '~/components/FormLink';

import { Container, FormArea, Form } from './styles';

import logoImg from '~/assets/logo.svg';
import heroesImg from '~/assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      const { name } = response.data;

      localStorage.setItem('bethehero@ongId', id);
      localStorage.setItem('bethehero@ongName', name);

      history.push('/profile');

      toast.success(`${name}, seja bem vindo novamente!`);
    } catch (err) {
      toast.error('Falha no login, tente novamente!');
    }
  }

  return (
    <Container>
      <FormArea>
        <img src={logoImg} alt="Be The Hero" />

        <Form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <TextInput
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
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
