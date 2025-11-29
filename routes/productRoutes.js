import express from 'express';

import { createProducts, updateProducts,deleteProducts, getProduct, getProducts } from '../controllers/productControllers.js';
import { fileCheck, updateFile } from '../middlewares/fileCheck.js';
import { checkAdmin, checkUser } from '../middlewares/checkUser.js';

  
const router= express.Router();

router.route('/products').get(getProducts).post(checkUser,checkAdmin,fileCheck,createProducts);

router.route('/products/:id').get(getProduct).patch(updateFile,updateProducts).delete(deleteProducts);
export default router;