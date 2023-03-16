import {
  getAllCars,
  createCar,
  getCarById,
  deleteCarById,
  updateCar,
} from '../controllers/carController';
import logger from '../utility/logger';
import express = require('express');

const carRouter = express.Router();

logger.debug('Car route loaded');
carRouter.route('/').get(getAllCars).post(createCar);
carRouter.route('/:id').get(getCarById).patch(updateCar).delete(deleteCarById);

export default carRouter;
