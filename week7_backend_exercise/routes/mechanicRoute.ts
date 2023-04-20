import logger from '../utility/logger';
import express = require('express');
import {
  createMechanic,
  deleteMechanicById,
  getAllMechanics,
  getMechanicById,
  updateMechanic,
} from '../controllers/mechanicController';

const mechanicRouter = express.Router();

logger.debug('Mechanic route loaded');
mechanicRouter.route('/').get(getAllMechanics).post(createMechanic);
mechanicRouter
  .route('/:id')
  .get(getMechanicById)
  .patch(updateMechanic)
  .delete(deleteMechanicById);

export default mechanicRouter;
