import joi from 'joi';

import joiValidator from'express-joi-validation';

export const validatorJoi=joiValidator.createValidator({});

export const loginSchema=joi.object({

  password:joi.string().min(2).required(),
  email:joi.string().email().required(),
  
});
export const registerSchema=joi.object({
  username:joi.string().min(3).required(),
  password:joi.string().min(2).required(),
  email:joi.string().email().required(),  
});