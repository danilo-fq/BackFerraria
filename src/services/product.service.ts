import Iproduct from '../interfaces/product.interface';
import productModel from '../models/product.model';

const create = async (product: Iproduct) => {
  const { insertId } = await productModel.create(product);
  const newProduct: Iproduct = { id: insertId, ...product };
  return newProduct;
};

const getAll = async (): Promise<Iproduct[]> => productModel.getAll();

export default { 
  create,
  getAll, 
};