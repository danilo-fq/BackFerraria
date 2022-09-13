import { Request, Response } from 'express';
import Iproduct from '../interfaces/product.interface';
import productService from '../services/product.service';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { name, amount } = req.body;
  const product: Iproduct = await productService.create({ name, amount });
  return res.status(201).json(product);
};

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const products: Iproduct[] = await productService.getAll();
  return res.status(200).json(products);
};

export default {
  create,
  getAll,
};