import { Router } from 'express';
import orderController from '../controllers/order.controller';

const routers = Router();

routers.get('/', orderController.getAll);

export default routers;