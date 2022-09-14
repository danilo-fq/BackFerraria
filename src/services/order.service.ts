import Iorder from '../interfaces/order.interface';
import orderModel from '../models/order.model';

const getAll = async (): Promise<Iorder[]> => orderModel.getAll();

export default {
  getAll,
};