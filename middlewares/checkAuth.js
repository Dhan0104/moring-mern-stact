import jwt from 'jsonwebtoken';



export const checkAuth=(req, res, next) => {

const token=req.headers.authorization;
const decode=jwt.verify(token,'token');


if (decode){
  req.userId=decode.id;
  req.role=decode.role;
    next();
}
else{
    return res.status(401).json({message:' unauth orized user'});

}}

export const adminCheck=(req,res,next)=>{
    if(req.role !=='admin'){
      return next();
    } 
  }