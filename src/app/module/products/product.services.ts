import { Product } from './product.interface';
import ProductModel from './student.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductFromDB = async (searchTerm: string) => {
  const searchQuery: Record<string, unknown> = {};

  console.log('Search term:', searchTerm);

  // Check if searchTerm is present and build the query accordingly
  if (searchTerm) {
    searchQuery.$or = [
      { name: { $regex: new RegExp(searchTerm, 'i') } }, // Use RegExp constructor
      { description: { $regex: new RegExp(searchTerm, 'i') } },
      { tags: { $regex: new RegExp(searchTerm, 'i') } },
      { category: { $regex: new RegExp(searchTerm, 'i') } },
    ];
  }

  console.log('Search query:', searchQuery); // Log the search query for debugging

  // Run the query and return the result
  const result = await ProductModel.find(searchQuery);
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
