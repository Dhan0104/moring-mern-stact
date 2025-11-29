import express from 'express';

import { createProducts, updateProducts,deleteProducts, getProduct, getProducts } from '../controllers/productControllers.js';
import { fileCheck, updateFile } from '../middlewares/fileCheck.js';
import { checkAdmin, checkUser } from '../middlewares/checkUser.js';
import { checkAuth } from '../middlewares/checkAuth.js';

  
const router= express.Router();

router.route('/products').get(getProducts).post(checkAuth,checkUser,checkAdmin,fileCheck,createProducts);

router.route('/products/:id').get(getProduct).patch(updateFile,updateProducts).delete(deleteProducts);
export default router;