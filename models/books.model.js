import pool from '../db/index.js';

export async function getAllBooks() {
  return await pool
    .query('SELECT * FROM books;')
    .then(response => response.rows);
}

export async function getBookById(id) {
  return await pool
    .query('SELECT * FROM books WHERE id = $1', [id])
    .then(response => response.rows[0]);
}

export async function createBook(newBook) {
  return await pool
    .query('INSERT INTO books (title) VALUES ($1) RETURNING *;', [
      newBook.title,
    ])
    .then(response => response.rows[0]);
}
