import { Request, Response, NextFunction } from "express";

export const notFound = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("error notFound");
  if (error.name === "CastError" && error.kind === "ObjectId") {
    res.status(404);
    const newError = new Error(`Not Found - ${req.originalUrl}`);
    return next(newError);
  }

  next(error);
};

export const errorHandler = (
  error: any,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
  });
};
