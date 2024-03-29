import * as dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import express = require('express');
import morgan = require('morgan');
import logger from './utility/logger';
import personRouter from './routes/personRoute';
import carRouter from './routes/carRoute';
import mechanicRouter from './routes/mechanicRoute';
import reviewRouter from './routes/reviewRoute';

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log('Development mode...');
}

app.use(express.json()); // Body parser for JSON data
app.use(express.static(`${__dirname}/public`)); // Serve static files

app.use('/api/v1/persons', personRouter);
app.use('/api/v1/cars', carRouter);
app.use('/api/v1/mechanic', mechanicRouter);
app.use('/api/v1/review', reviewRouter);

export default app;
