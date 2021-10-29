import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import booksRouter from '../routes/books.router.js';
import jokesRouter from '../routes/jokes.router.js';
import { errorHandler, notFoundHandler } from '../middleware/index.js';

const app = express();

app
  .use(morgan('dev'))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/books', booksRouter)
  .use('/jokes', jokesRouter)
  .use(notFoundHandler)
  .use(errorHandler);

export default app;
