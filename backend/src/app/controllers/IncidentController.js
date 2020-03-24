import Incident from '../models/Incident';

class IncidentController {
  async index(req, res) {
    const incidents = await Incident.findAll();

    return res.json(incidents);
  }

  async store(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const id = await Incident.create(ong_id, title, description, value);

    return res.json({ id });
  }

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await Incident.findByPk(id);

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted' });
    }

    await Incident.deleteByPk(id);

    return res.status(204).send();
  }
}

export default new IncidentController();
