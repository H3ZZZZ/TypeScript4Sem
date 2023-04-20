import express, { Request, Response, NextFunction } from 'express';
import logger from '../utility/logger';
import Mechanic from '../models/mechanicModel';

interface Mechanic {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  password: string;
}

export const getAllMechanics = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const queryObj = req.query;
    res.status(200).json({
      status: 'success',
      method: 'GET',
      data: await Mechanic.find(queryObj),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};

export const getMechanicById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      status: 'success',
      method: 'GET',
      data: await Mechanic.findById(req.params.id),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};
export const createMechanic = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newMechanic = await Mechanic.create(req.body);

    res.status(201).json({
      status: 'success',
      method: 'POST',
      data: newMechanic,
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};

export const updateMechanic = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      status: 'success',
      method: 'PATCH',
      data: await Mechanic.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      }),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};

export const deleteMechanicById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      status: 'success',
      method: 'DELETE',
      data: await Mechanic.findByIdAndDelete(req.params.id),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};
