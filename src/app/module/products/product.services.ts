import { Product } from './product.interface';
import ProductModel from './student.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductByDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findOneAndDelete({ _id: id });
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductByDB,
  deleteProductFromDB,
};
