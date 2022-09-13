import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret: jwt.Secret = process.env.JWT_SECRET || 'smith123';

type Character = {
  username:string,
  classe:string,
  level:number,
};

const generateToken = (character: Character): string => {
  const token: string = jwt.sign({ data: character }, secret, {
    expiresIn: '30min',
    algorithm: 'HS256',
  });
  return token;
};

const validateToken = (token: string): string | JwtPayload | null => {
  try {
    const decode: string | JwtPayload = jwt.verify(token, secret);
    return decode;
  } catch (err) {
    return null;
  }
};

export default {
  generateToken,
  validateToken,
};