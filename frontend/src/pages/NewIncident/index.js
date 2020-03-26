import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '~/services/api';

import TextInput from '~/components/TextInput';
import TextArea from '~/components/TextArea';
import FormLink from '~/components/FormLink';
import Button from '~/components/Button';

import { Container, Content, Description, Form } from './styles';

import logoImg from '~/assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ong_id = localStorage.getItem('bethehero@ongId');

  async function handleSubmit(event) {
    event.preventDefault();

    const data = { title, description, value };

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ong_id,
        },
      });

      history.push('/profile');

      toast.success('Caso cadastrado com sucesso!');
    } catch (err) {
      toast.error('Ocorreu um erro ao incluir, tente novamente!');
    }
  }

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

        <Form onSubmit={handleSubmit}>
          <TextInput
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextInput
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
