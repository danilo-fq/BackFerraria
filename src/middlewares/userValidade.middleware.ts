import { NextFunction, Request, Response } from 'express';
import RequestError from '../helpers/RequestError';

export const usernameValidate = (req: Request, _res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) throw new RequestError(400, '"username" field are missing');
  if (username.length < 3) {
    throw new RequestError(400, '"username" length must be equal or greater than 3');
  }
  next();
};

export const classeValidate = (req: Request, _res: Response, next: NextFunction) => {
  const { classe } = req.body;
  if (!classe) throw new RequestError(400, '"classe" field are missing or invalid');
  next();
};

export const levelValidate = (req: Request, _res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (!level) throw new RequestError(400, '"level" field are missing or invalid');
  if (level <= 0) throw new RequestError(400, '"level" must be greater than 0');
  next();
};

export const passwordValidate = (req: Request, _res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) throw new RequestError(400, '"password" field are missing or invalid');
  if (password.length < 6) {
    throw new RequestError(400, '"password" length must be equal or greater than 6');
  }
  next();
};