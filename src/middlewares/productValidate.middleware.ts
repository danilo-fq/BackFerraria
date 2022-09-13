import { NextFunction, Request, Response } from 'express';
import RequestError from '../helpers/RequestError';

export default (req: Request, _res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  if (!name || typeof name !== 'string') {
    throw new RequestError(400, '"name" field are missing or invalid type');
  }
  if (!amount || typeof amount !== 'string') {
    throw new RequestError(400, '"amount" field are missing or invalid type');
  }
  next();
};