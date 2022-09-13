import { Router } from 'express';
import productController from '../controllers/product.controller';
import productValidate from '../middlewares/productValidate.middleware';

const routers = Router();

routers.post(
  '/',
  productValidate,
  productController.create,
);

export default routers;