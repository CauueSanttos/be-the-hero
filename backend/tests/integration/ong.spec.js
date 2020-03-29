import request from 'supertest';
import app from '../../src/app';
import databaseConnection from '../../src/database';

describe('ONG', () => {
  beforeEach(async () => {
    await databaseConnection.migrate.rollback();
    await databaseConnection.migrate.latest();
  });

  afterAll(async () => {
    await databaseConnection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'APAD',
        email: 'email@apad.com',
        whatsapp: '5547997523571',
        city: 'Rio do Sul',
        uf: 'SC',
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
