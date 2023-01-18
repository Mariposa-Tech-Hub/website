import { StatusCodes } from 'http-status-codes';

class CustomAPIError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

class UnauthorizedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

class ValidationError extends CustomAPIError {
  constructor(message, errors) {
    super(message);
    this.statusCode = StatusCodes.UNPROCESSABLE_ENTITY;
    this.errors = errors;
  }
}

const CustomError = {
  BadRequestError,
  CustomAPIError,
  NotFoundError,
  UnauthenticatedError,
  UnauthorizedError,
  ValidationError,
};

export default CustomError;
