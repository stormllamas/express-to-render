/**
 * A higher-order function that wraps an asynchronous function and ensures that any errors are passed to the next middleware.
 *
 * @returns {(req: Request, res: Response, next: NextFunction) => void}
 * A function that takes Express request, response, and next function, and executes the wrapped function,
 * catching any errors and passing them to the next middleware.
 */
import { Request, Response, NextFunction } from "express";


const asynchandler =
  <T extends Function>(fn: T) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

export default asynchandler;
