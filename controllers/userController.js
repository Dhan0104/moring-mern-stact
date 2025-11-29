import User from "../models/User.js";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
export const loginUser=async(req,res)=>{

const  {email,password}=req.body;

try {
  const isExist= await User.findOne({email:email});
  if(!isExist){
    return res.status(404).json({message:' user not found'});
  }
  const pass=bcrypt.compareSync(password,isExist.password);
  if(!pass){
    return res.status(401).json({message:' invalid credentials'});
  }
  const token= jwt.sign({
    role:isExist.role,
    id:isExist.id,
    username:isExist.username
  },'token');
  // return res.status(200).json({
  //   token,
  //   email:isExist.email,
  //   role:isExist.role,
  //   message:' login successful'
  // });
  res.cookie(token,'jwt',
    { 
      httpOnly:true,
      maxAge:24*60*60*1000,
      sameSite:'none'
     });
     return res.status(200).json({
      token,
      role:isExist.role,
      message:' login successful'
     });

} catch (err) {
    return res.status(400).json({message:`${err}`});
}
}




export const registerUser= async (req,res)=>{

  const {username,email,password}=req.body;
  try {
    const isExist= await User.findOne({email:email});
    if(isExist){ 
      return res.status(401).json({message:' email already exist'});
    }
      const hashPass=bcrypt.hashSync(password,2);

      await User.create({
        username,
        email,
        password:hashPass,
      });
      return res.status(201).json({message:' user registered successfully'});
    
  } catch (err) {
    return res.status(400).json({message:`${err}`});
  }
}

