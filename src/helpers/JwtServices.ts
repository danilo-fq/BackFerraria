import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import Iuser from '../interfaces/user.interface';

dotenv.config();

const secret: jwt.Secret = process.env.JWT_SECRET || 'smith123';

export const generateToken = (character: Iuser): string => {
  const token: string = jwt.sign({ data: character }, secret, {
    expiresIn: '30min',
    algorithm: 'HS256',
  });
  return token;
};

export const validateToken = (token: string): string | JwtPayload | null => {
  try {
    const decode: string | JwtPayload = jwt.verify(token, secret);
    return decode;
  } catch (err) {
    return null;
  }
};
