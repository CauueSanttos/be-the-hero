import { Router } from 'express';

const routes = new Router();

import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

export default routes;
