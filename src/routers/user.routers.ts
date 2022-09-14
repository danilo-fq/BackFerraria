import { Router } from 'express';
import userController from '../controllers/user.controller';
import { 
  classeValidate,
  levelValidate,
  passwordValidate,
  usernameValidate,
} from '../middlewares/userValidade.middleware';

const routers = Router();

routers.post(
  '/',
  usernameValidate,
  classeValidate,
  levelValidate,
  passwordValidate,
  userController.create,
);

export default routers;