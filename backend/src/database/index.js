import knex from 'knex';
import databaseConfig from '../../knexfile';

export default knex(databaseConfig.development);
