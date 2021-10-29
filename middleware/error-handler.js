import * as config from '../config/index.js';

export async function errorHandler(err, req, res, next) {
  console.error(err?.stack);
  res.status(err?.status ?? 500).json({
    success: false,
    error: (!config.context.IS_PRODUCTION && err?.message) || 'An unknown error occurred',
  });
}
