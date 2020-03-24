import db from '../../database';

class Incident {
  async findByPk(id) {
    const incident = await db('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    return incident;
  }

  async findAllByOng(ong_id) {
    const incidents = await db('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return incidents;
  }

  async findAll(page) {
    const incidents = await db('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset(( page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ]);

    return incidents;
  }

  async count() {
    const [count] = await db('incidents').count();

    return count['count(*)'];
  }

  async create(ong_id, title, description, value) {
    const [id] = await db('incidents').insert({
      ong_id,
      title,
      description,
      value,
    });

    return id;
  }

  async deleteByPk(id) {
    await db('incidents').where('id', id).delete();
  }
}

export default new Incident();
