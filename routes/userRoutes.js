import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';
import { loginSchema, registerSchema, validatorJoi } from '../utils/validator.js';
import { methodNotAllowed } from '../utils/methodNotAllowed.js';



const router = express.Router();

router.route('/login').post(validatorJoi.body(loginSchema),loginUser).all(methodNotAllowed);
router.route('/register').post(validatorJoi.body(registerSchema),registerUser).all(methodNotAllowed);


export default router;
