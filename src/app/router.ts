import { Router } from 'express';
import { createCategories } from './useCases/categories/createCategory';
import { listCategories } from './useCases/categories/listCategories';

export const router = Router();

//List categories
router.get('/categories', listCategories);

// Create category

router.post('/categories', createCategories);

// list products

router.get('/products', (req, res) => {
    res.send('OK');
});

// Create product

router.post('/products', (req, res) => {
    res.send('OK');
});

// Get products by Category

router.get('/categories/:categoryId/products', (req, res) => {
    res.send('OK');
});

// List orders

router.get('/orders', (req, res) => {
    res.send('OK');
});

// create order

router.post('/orders', (req, res) => {
    res.send('OK');
});

// change order status

router.patch('/orders:orderId', (req, res) => {
    res.send('OK');
});

// Delete/Cancel Order

router.delete('/orders:orderId', (req, res) => {
    res.send('OK');
});
