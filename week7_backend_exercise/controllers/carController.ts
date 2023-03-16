import express, { Request, Response, NextFunction } from 'express';
import logger from '../utility/logger';
import Car from '../models/carModel';

interface Car {
  id: string;
  model: string;
  year: number;
  price: number;
  color: string;
}
const cars: Car[] = [
  {
    id: '1',
    model: 'Audi',
    year: 2010,
    price: 10000,
    color: 'red',
  },
  {
    id: '2',
    model: 'Volvo',
    year: 2012,
    price: 12000,
    color: 'blue',
  },
  {
    id: '3',
    model: 'Saab',
    year: 2001,
    price: 5000,
    color: 'green',
  },
  {
    id: '4',
    model: 'BMW',
    year: 2015,
    price: 15000,
    color: 'black',
  },
  {
    id: '5',
    model: 'Mercedes',
    year: 2017,
    price: 20000,
    color: 'red',
  },
];

export const getAllCars = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      status: 'success',
      method: 'GET',
      data: await Car.find(),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};

export const getCarById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      status: 'success',
      method: 'GET',
      data: await Car.findById(req.params.id),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};
export const createCar = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newCar = await Car.create(req.body);

    res.status(201).json({
      status: 'success',
      method: 'POST',
      data: newCar,
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};

export const updateCar = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      status: 'success',
      method: 'PATCH',
      data: await Car.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      }),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};

export const deleteCarById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      status: 'success',
      method: 'DELETE',
      data: await Car.findByIdAndDelete(req.params.id),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};
