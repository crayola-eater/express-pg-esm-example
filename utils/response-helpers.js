export function createSuccessResponse(payload) {
  return {
    success: true,
    payload,
  };
}

export function createError(status, errorMessage, originalError) {
  const error = new Error(errorMessage);
  return Object.assign(error, { status, originalError });
}
