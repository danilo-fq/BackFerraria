import { Request, Response } from 'express';
import productService from '../services/product.service';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { name, amount } = req.body;
  const product = await productService.create({ name, amount });
  return res.status(201).json(product);
};

export default {
  create,
};