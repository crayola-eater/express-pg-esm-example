import Router from 'express-promise-router';
import fetch from 'node-fetch';
import { createError, createSuccessResponse } from '../utils/response-helpers.js';

const router = Router();
const API_BASE_URL = 'https://icanhazdadjoke.com/';

async function fetchDadJoke() {
  const response = await fetch(API_BASE_URL, {
    headers: { Accept: 'text/plain' },
  });
  return await response.text();
}

router.get('/', async (_, res, next) => {
  try {
    res.json(createSuccessResponse(await fetchDadJoke()));
  } catch (err) {
    next(createError(500, 'Failed to get dad joke', err));
  }
});

export default router;
