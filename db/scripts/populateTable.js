import pool from '../index.js';

const values = [...'abcdefghijklmnopqrstuvwxyz'];
const placeholders = values.map((_, i) => `($${i + 1})`).join(', ');

await pool
  .query(`INSERT INTO books (title) VALUES ${placeholders};`, values)
  .then(() => console.log('Populated books table'))
  .catch(error => console.error(error.stack))
  .finally(() => pool.end());
