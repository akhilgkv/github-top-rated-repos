/**
 * HTTP constants.
 * @name helpers.http
 */

/**
 * HTTP Verbs enumeration.
 * A lightweight enumeration which contains all the api verbs possible via API. Values are powers of 2 so it can act as a bit-mask when required.
 */
export const VERBS = Object.freeze({
  OPTIONS: 1,
  GET: 2,
  POST: 4,
  PUT: 8,
  PATCH: 16,
  DELETE: 32,
} as const);

/**
 * HTTP Status codes which are used in various ways when detecting http status.
 */
export const STATUS_CODES = Object.freeze({
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
} as const);
