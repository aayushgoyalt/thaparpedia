const {collection1}=require('../Collections/collection1');

const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
app.use(cookieParser);

const jwt=require('jsonwebtoken');
const secret_key='asdfghjkl';

const protectRouter=express.Router();


protectRouter
.route('/')
.post(protect)







async function protect(req,res){
    let token=req.body.token;
    try{
        if(token){                                              
            let payload=jwt.verify(token,secret_key);               
  
            if(payload){
                let user= await collection1.findById(payload.payload);              
                req.id=payload.payload;  
                res.json({
                    message:"Authenticated Succesfully",
                    auth:true
                })
            }
            else{
                return res.json({
                    message:"I got you :)",
                    auth:false
            })
            }
        }
   
        else{                                                               
            return res.json({
                message:"Login first",
                auth:false
           })
       }
   }
   catch(err){
       return res.json({
           message:err.message,
           auth:false
       })
   }
}



module.exports=protectRouter;