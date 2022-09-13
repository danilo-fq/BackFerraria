import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Iproduct from '../interfaces/product.interface';

const create = async (product: Iproduct): Promise<ResultSetHeader> => {
  const [result] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );
  return result;
};

export default {
  create,
};