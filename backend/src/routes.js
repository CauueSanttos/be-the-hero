import { Router } from 'express';

const routes = new Router();

import OngController from './app/controllers/OngController';

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

export default routes;
