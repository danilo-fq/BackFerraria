import { RowDataPacket } from 'mysql2';
import Iorder from '../interfaces/order.interface';
import connection from './connection';

const getAll = async (): Promise<Iorder[]> => {
  const [rows] = await connection
    .execute<RowDataPacket[]>(
    `SELECT
      o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY o.userId ASC;`,
  );
  return rows as Iorder[];
};

export default {
  getAll,
};