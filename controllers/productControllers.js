import Product from "../models/Product.js";
import fs from "fs";
import mongoose from "mongoose";
import { removeFile } from "../utils/removeFIle.js";

export const getProducts= async (req,res)=> {
 try {
  const Product= await Product.find({});
  return res.status(200).json({
    Product,
  });

 } catch (err) {
  return res.status(500).json({message:err.message});
}
}

export const getProduct=async(req,res)=> {
   const { id } = req.params;
try {
  
  if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'Invalid Product Id' });
   
  const isExist = await Product.findById(id);

  if (!isExist) return res.status(404).json({ message: 'Product Not Found' });

 //return res.status(200).json({ product: isExist,
 //});
}
 catch (error) {
  return res.status(400).json({ message: `${error}` });
 }  
}

export const createProducts=async (req,res)=>{
 
try {
  await Product.create({
    ...req.body,

    image:req.imagePath,
  });
  return res.status(200).json({message:' product created successfully'});
} catch (error) {
   fs.unlink(`./uploads/${req.imagePath}`, (err) => {
      return res.status(500).json({ message: `${error}` });
    })
}
}



export const updateProducts=async(req,res)=> {
const { id } = req.params;

try {
  if (!mongoose.isValidObjectId(id)){
    if (req.imagePath) removeFile(req.imagePath);
 return res.status(400).json({ message: 'Invalid Product Id' });
  }
   
  const isExist = await Product.findById(id);
  if (!isExist) {
      if (req.imagePath) removeFile(req.imagePath);
    return res.status(404).json({ message: 'Product Not Found' });
  }
 
  isExist.title= req.body?.title || isExist.title;
isExist.name= req.body?.name || isExist.name;
isExist.price= req.body?.price || isExist.price;
isExist.description= req.body?.description || isExist.description;
isExist.category= req.body?.category || isExist.category;
isExist.image=req.imagePath || isExist.image;

if (req.imagePath) removeFile(isExist.image);
await isExist.save();
  return res.status(200).json({ message: 'Product Updated Successfully',
  
  });
} catch (err) {
  if (req.imagePath) removeFile(req.imagePath);
  return res.status(400).json({ message: err.message });
}
}



export const deleteProducts = async (req, res) => {
  const { id } = req.params;
try {
  
  if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'Invalid Product Id' });
   
  const isExist = await Product.findById(id);

  if (!isExist) return res.status(404).json({ message: 'Product Not Found' });

  fs.unlink(`./uploads/${isExist.image}`, async (err)=> {
    await isExist.deleteOne();
    return res.status(200).json({ message: 'Product Deleted Successfully' });
  });
}
 catch (error) {
  return res.status(400).json({ message: `${error}` });
 }  
}