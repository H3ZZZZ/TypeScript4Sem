
  import logger from '../utility/logger';
  import express = require('express');
import { createReview, deleteReviewById, getAllReviews, getReviewById, updateReview } from '../controllers/reviewController';
  
  const reviewRoute = express.Router();
  
  logger.debug('Car route loaded');
  reviewRoute.route('/').get(getAllReviews).post(createReview);
  reviewRoute.route('/:id').get(getReviewById).patch(updateReview).delete(deleteReviewById);
  
  export default reviewRoute;
  