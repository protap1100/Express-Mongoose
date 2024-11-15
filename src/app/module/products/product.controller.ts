import { Request, Response } from 'express';
import { ProductService } from './product.services';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductService.createProductIntoDB(product);
    // send response
    res.status(200).json({
      success: true,
      message: 'Product Created Successfully',
      data: result,
    });
  } catch (errors: any) {
    res.status(200).json({
      success: false,
      message: errors.message,
    });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query?.searchTerm;
    const result = await ProductService.getAllProductFromDB(
      searchTerm as string,
    );
    console.log(searchTerm);
    // console.log('hi');
    res.status(200).json({
      success: true,
      message: 'Product Retrieved Successfully',
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something Went wrong',
      error: error,
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await ProductService.getSingleProductByDB(id);
    res.status(200).send({
      success: true,
      message: 'Single Product fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    await ProductService.deleteProductFromDB(id);
    res.json({
      success: true,
      message: 'Product Deleted Successfully',
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

export const StudentController = {
  createProduct,
  getAllProduct,
  getProductById,
  deleteProductById,
};
