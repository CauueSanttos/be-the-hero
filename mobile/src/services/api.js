import axios from 'axios';
import ENV from '../../env.js';

const api = axios.create({
  baseURL: `${ENV.host}:3333`,
});

export default api;
