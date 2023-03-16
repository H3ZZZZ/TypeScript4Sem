import express, { Request, Response, NextFunction } from 'express';
import logger from '../utility/logger';
import Person from '../models/peopleModel';

interface Person {
  id: string;
  name: string;
  age: number;
  city: string;
}


export const getAllPersons = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      status: 'success',
      method: 'GET',
      data: await Person.find(),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};

export const getPersonById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      status: 'success',
      method: 'GET',
      data: await Person.findById(req.params.id),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};
export const createPerson = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newPerson = await Person.create(req.body);

    res.status(201).json({
      status: 'success',
      method: 'POST',
      data: newPerson,
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};

export const updatePerson = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      status: 'success',
      method: 'PATCH',
      data: await Person.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      }),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};

export const deletePersonById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      status: 'success',
      method: 'DELETE',
      data: await Person.findByIdAndDelete(req.params.id),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};
