import express from 'express';
import { StudentController } from './product.controller';
const router = express.Router();

const { createProduct, getAllProduct, getProductById, deleteProductById } =
  StudentController;

router.post('/', createProduct);
router.get('/', getAllProduct);
router.get('/:productId', getProductById);
router.delete('/:productId', deleteProductById);

export const ProductRoutes = router;
