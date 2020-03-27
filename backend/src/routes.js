import { Router } from 'express';

import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';

import validateAuth from './app/validators/Auth';
import validateOngStore from './app/validators/OngStore';
import validateIncidentStore from './app/validators/IncidentStore';
import validateIncidentList from './app/validators/IncidentList';
import validateIncidentDelete from './app/validators/IncidentDelete';

class Routes {
  constructor() {
    this.routes = new Router();

    this.session();
    this.ongs();
    this.profile();
    this.incidents();
  }

  session() {
    this.routes.post('/sessions', SessionController.store);
  }

  ongs() {
    this.routes.get('/ongs', OngController.index);
    this.routes.post('/ongs', validateOngStore, OngController.store);
  }

  profile() {
    this.routes.get('/profile', validateAuth, ProfileController.index);
  }

  incidents() {
    this.routes.get(
      '/incidents',
      validateIncidentList,
      IncidentController.index
    );

    this.routes.post(
      '/incidents',
      validateAuth,
      validateIncidentStore,
      IncidentController.store
    );

    this.routes.delete(
      '/incidents/:id',
      validateAuth,
      validateIncidentDelete,
      IncidentController.delete
    );
  }
}

export default new Routes().routes;
