import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { createCategories } from './useCases/categories/createCategory';
import { listCategories } from './useCases/categories/listCategories';
import { createProduct } from './useCases/products/createProduct';
import { listProducts } from './useCases/products/listProducts';
import { listProductsByCategory } from './useCases/categories/listProductsByCategory';
import { listOrders } from './useCases/orders/listOrders';
import { createOrder } from './useCases/orders/createOrder';
import { changeOrderStatus } from './useCases/orders/changeOrderStatus';
import { cancelOrder } from './useCases/orders/cancelOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(_req, _file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(_req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

//List categories
router.get('/categories', listCategories);

// Create category

router.post('/categories', createCategories);

// list products

router.get('/products', listProducts);

// Create product

router.post('/products', upload.single('image'), createProduct);

// Get products by Category

router.get('/categories/:categoryId/products', listProductsByCategory);

// List orders

router.get('/orders', listOrders);

// create order

router.post('/orders', createOrder);

// change order status

router.patch('/orders/:orderId', changeOrderStatus);

// Delete/Cancel Order

router.delete('/orders/:orderId', cancelOrder);
