import { model, Schema } from 'mongoose';
import { Product } from './product.interface';

const productVariantSchema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});
const inventorySchema = new Schema({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [productVariantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});

const ProductModel = model<Product>('Products', productSchema);
export default ProductModel;
