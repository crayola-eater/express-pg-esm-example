import pool from '../index.js';

await pool
  .query(
    `CREATE TABLE IF NOT EXISTS books (
      id SERIAL PRIMARY KEY,
      title VARCHAR(50) NOT NULL
    );`
  )
  .then(() => console.log('Created books table'))
  .catch(error => console.error(error.stack))
  .finally(() => pool.end());
