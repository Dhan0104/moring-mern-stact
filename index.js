import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mongoose from 'mongoose';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';


const app=express();
const port=5000;
mongoose.connect('mongodb+srv://kdhanbhadur68_db_user:pass900@cluster0.hmhshcp.mongodb.net/Shop').then((val)=>{
console.log('database is connected successfully');
}).catch((err)=>{
  console.log(err);
})


//MVC MODEL VIEW CONTROLLER
app.use(express.json());
app.use(morgan('dev'));
app.use(fileUpload({
  limits:{fileSize:50*1024*1024},
}));

app.get('/',(req,res)=>{
  console.log(req.body);
  return res.status(200).json({message: 'welcome to back end'});
});

app.use(productRoutes);
app.use('/users',userRoutes);
app.listen (port,()=>{
  console.log(" server is running on port ");
});




