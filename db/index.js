import pg from 'pg';
import { database } from '../config/index.js';

const pool = new pg.Pool({
  connectionString: database.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
