import Iuser from '../interfaces/user.interface';
import userModel from '../models/user.model';
import { generateToken } from '../helpers/JwtServices';

const create = async (user: Iuser): Promise<string> => {
  const { insertId } = await userModel.create(user);
  const newUser: Iuser = { id: insertId, ...user };
  delete newUser.password;
  delete newUser.level;
  return generateToken(newUser);
};

export default {
  create,
};

// ref: https://pt.stackoverflow.com/questions/479147/the-operand-of-a-delete-operator-must-be-optional