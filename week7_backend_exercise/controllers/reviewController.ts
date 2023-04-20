import express, { Request, Response, NextFunction } from 'express';
import logger from '../utility/logger';
import Review from '../models/reviewModel';

interface Review {
    id: string;
    review: string;
    rating: number;
}
  

export const getAllReviews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      status: 'success',
      method: 'GET',
      data: await Review.find(),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};

export const getReviewById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      status: 'success',
      method: 'GET',
      data: await Review.findById(req.params.id),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};
export const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newReview = await Review.create(req.body);

    res.status(201).json({
      status: 'success',
      method: 'POST',
      data: newReview,
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};

export const updateReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      status: 'success',
      method: 'PATCH',
      data: await Review.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      }),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};

export const deleteReviewById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      status: 'success',
      method: 'DELETE',
      data: await Review.findByIdAndDelete(req.params.id),
    });
  } catch (err: any) {
    logger.log(err);
    next(err);
  }
};
