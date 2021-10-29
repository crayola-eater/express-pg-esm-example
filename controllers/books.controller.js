import * as booksModel from '../models/books.model.js';
import { createSuccessResponse, createError } from '../utils/response-helpers.js';

export async function getAllBooks(_, res) {
  const books = await booksModel.getAllBooks();
  res.json(createSuccessResponse(books));
}

export async function getBookById(req, res, next) {
  const book = await booksModel.getBookById(req.params.id);
  if (book) {
    return res.json(createSuccessResponse(book));
  }
  next(createError(404, `No book with id ${req.params.id}`));
}

export async function createBook(req, res, next) {
  try {
    const created = await booksModel.createBook({ ...req.body });
    res.status(201).json(createSuccessResponse(created));
  } catch (err) {
    next(createError(400, 'Failed to create book', error));
  }
}
