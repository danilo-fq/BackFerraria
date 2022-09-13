import { NextFunction, Request, Response } from 'express';
import RequestError from '../helpers/RequestError';

export default (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof RequestError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  console.error(err);
  res.status(500).json({ message: 'Server Internal Error' });
};