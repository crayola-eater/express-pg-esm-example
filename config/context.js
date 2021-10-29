export const IS_PRODUCTION = process.env.NODE_ENV?.match(/^prod(?:uction)?$/i) ?? false;
