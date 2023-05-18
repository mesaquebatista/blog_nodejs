import express from 'express';
import categoryRoutes from './categories.js';
const adminRoutes = express.Router();

adminRoutes.use('/categories', categoryRoutes);

export default adminRoutes;