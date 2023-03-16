import logger from '../utility/logger';
import express = require('express');
import {
  createPerson,
  deletePersonById,
  getAllPersons,
  getPersonById,
  updatePerson,
} from '../controllers/personController';

const personRouter = express.Router();

logger.debug('Person route loaded');
personRouter.route('/').get(getAllPersons).post(createPerson);
personRouter
  .route('/:id')
  .get(getPersonById)
  .patch(updatePerson)
  .delete(deletePersonById);

export default personRouter;
