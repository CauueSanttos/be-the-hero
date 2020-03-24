import generateId from '../../utils/generateId';
import db from '../../database';

class Ong {
  async findAll() {
    const ongs = await db('ongs').select('*');

    return ongs;
  }

  async create(name, email, whatsapp, city, uf) {
    const id = generateId();

    await db('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return id;
  }
}

export default new Ong();
