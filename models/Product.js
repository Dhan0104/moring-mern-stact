import mongoose from "mongoose";

const productSchema=new mongoose.Schema({

  title:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
  },
  category:{
    type:String,
    required:true,
    enum:['electronics','clothes','food','books','others'],
  },
 
  rating:{
    type:Number,
  default:0,
  },
  image:{ 
    type:String,
    required:true,
    
  },
});

const Product=mongoose.model("Product",productSchema)
export default Product;