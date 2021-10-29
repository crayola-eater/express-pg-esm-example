import Router from 'express-promise-router';
import * as booksController from '../controllers/books.controller.js';

const router = Router();
router
  .get('/', booksController.getAllBooks)
  .get('/:id', booksController.getBookById)
  .post('/', booksController.createBook);

export default router;
