/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '~/services/api';
import { formatPrice } from '~/utils/format';

import Button from '~/components/Button';

import { Container, Header, IncidentList, IncidentItem } from './styles';

import logoImg from '~/assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongName = localStorage.getItem('bethehero@ongName');
  const ong_id = localStorage.getItem('bethehero@ongId');

  useEffect(() => {
    async function loadIncidents() {
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
  }, [ong_id]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ong_id,
        },
      });

      setIncidents(
        incidents.filter((incident) => {
          if (incident.id !== id) {
            return incident;
          }

          toast.success(`Caso: ${incident.title}, excluído com sucesso!`);
        })
      );
    } catch (err) {
      toast.error('Erro ao excluir o caso, tente novamente!');
    }
  }

  async function handleLogout() {
    localStorage.clear();
    history.push('/');
    toast.success(`Até logo ${ongName}!`);
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Button className="incidents">
          <Link to="/incidents/new">Cadastrar novo caso</Link>
        </Button>

        <button className="power" type="button" onClick={handleLogout}>
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

            <button
              type="button"
              onClick={() => handleDeleteIncident(incidentItem.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </IncidentItem>
        ))}
      </IncidentList>
    </Container>
  );
}
