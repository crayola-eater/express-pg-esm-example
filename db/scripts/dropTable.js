import pool from '../index.js';

await pool
  .query('DROP TABLE IF EXISTS books;')
  .then(() => console.log('Dropped books table'))
  .catch(error => console.error(error.stack))
  .finally(() => pool.end());
