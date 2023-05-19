import express from 'express';
import categoryRoutes from './categories.js';
const adminRoutes = express.Router();

adminRoutes.get('/', function(req, res) {
    res.render('admin/index');
});

adminRoutes.use('/categories', categoryRoutes);


export default adminRoutes;