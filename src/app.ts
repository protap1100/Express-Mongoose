import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { ProductRoutes } from './app/module/products/product.route';
// const path = 2000;

// Parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoutes);

const getAController = (req: Request, res: Response) => {};

app.get('/', getAController);

export default app;
