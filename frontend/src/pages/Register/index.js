import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';

import api from '~/services/api';

import TextInput from '~/components/TextInput';
import FormLink from '~/components/FormLink';
import Button from '~/components/Button';

import { Container, Content, Description, Form, InputGroup } from './styles';

import logoImg from '~/assets/logo.svg';

export default function Register() {
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const data = { name, email, whatsapp, city, uf };

    try {
      const response = await api.post('/ongs', data);

      toast.success('Cadastro efetuado com sucesso!');

      setId(response.data.id);
      setName('');
      setEmail('');
      setWhatsapp('');
      setCity('');
      setUf('');
    } catch (err) {
      toast.error('Erro no cadastro, tente novamente!');
    }
  }

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

        <Form onSubmit={handleSubmit}>
          <TextInput
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <InputGroup>
            <TextInput
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextInput
              className="uf"
              placeholder="UF"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </InputGroup>

          <Button type="submit">Cadastrar</Button>
          {id && (
            <span>
              Seu ID de Acesso é: <strong>{id}</strong>
            </span>
          )}
        </Form>
      </Content>
    </Container>
  );
}
