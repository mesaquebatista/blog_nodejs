import express from 'express';
import CategoryController from '../../controllers/CategoryController.js';
const categoryRoutes = express.Router();

/* ===== GET ===== */
categoryRoutes.get('/', CategoryController.index);
categoryRoutes.get('/create', CategoryController.create);

/* ===== POST ===== */
categoryRoutes.post('/create', CategoryController.store);

export default categoryRoutes;