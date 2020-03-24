import Incident from '../models/Incident';

class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const incidents = await Incident.findAllByOng(ong_id);

    return res.json(incidents);
  }
}

export default new ProfileController();
