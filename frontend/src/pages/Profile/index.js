import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '~/services/api';
import { formatPrice } from '~/utils/format';

import Button from '~/components/Button';

import { Container, Header, IncidentList, IncidentItem } from './styles';

import logoImg from '~/assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongName = localStorage.getItem('bethehero@ongName');

  useEffect(() => {
    async function loadIncidents() {
      const ong_id = localStorage.getItem('bethehero@ongId');

      const response = await api.get('/profile', {
        headers: {
          Authorization: ong_id,
        },
      });

      const data = response.data.map((incidentRes) => ({
        ...incidentRes,
        valueFormatted: formatPrice(incidentRes.value),
      }));

      setIncidents(data);
    }

    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Button className="incidents">
          <Link to="/incidents/new">Cadastrar novo caso</Link>
        </Button>

        <button className="power" type="button">
          <FiPower color="#E02041" size={18} />
        </button>
      </Header>

      <h1>Casos cadastrados</h1>

      <IncidentList>
        {incidents.map((incidentItem) => (
          <IncidentItem key={incidentItem.id}>
            <strong>CASO:</strong>
            <p>{incidentItem.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incidentItem.description}</p>

            <strong>VALOR:</strong>
            <p>{incidentItem.valueFormatted}</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </IncidentItem>
        ))}
      </IncidentList>
    </Container>
  );
}
