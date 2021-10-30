import supertest from 'supertest';
import app from '../server/app.js';
import pool from '../db/index.js';

const request = supertest(app);

afterAll(async () => {
  await pool.end();
});

it('GET /books', async () => {
  const response = await request.get('/books');
  expect(response.headers['content-type']).toMatch(/application\/json/);
  expect(response.body).toStrictEqual({
    success: true,
    payload: expect.arrayContaining([
      {
        id: expect.any(Number),
        title: expect.stringMatching(/^[a-z]$/),
      },
    ]),
  });
});
