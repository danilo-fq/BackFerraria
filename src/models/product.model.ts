import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

const getAll = async (): Promise<Iproduct[]> => {
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
  return rows as Iproduct[];
};

export default {
  create,
  getAll,
};