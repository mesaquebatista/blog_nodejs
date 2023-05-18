import adminRoutes from "./admin/index.js";
import express from 'express';

const router = express.Router();

router.use('/admin', adminRoutes);

export default router;