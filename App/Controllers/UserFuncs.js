const collection1=require('../Collections/collection1');

const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
app.use(cookieParser);

const jwt=require('jsonwebtoken');
const secret_key='asdfghjkl';



module.exports.getUser= async function getUser(req,res){
    let id =req.id;                          
    //Since the route is '/profilepage' we get id in params as we used a middlewear protectroute which will add id to thed req.id....

    let user=await collection1.findById(id);
    if(user){
        res.json({
            Users:user
        });
    }
    else{
        res.json({
            message:'User not found'
        });
    }
    
}






module.exports.getallUsers= async function getallUsers(req,res){
    let user=await collection1.find();
    res.json({
        Users:user
    });
}









module.exports.updateUser= async function updateUser(req,res){
    try{
        let data=req.body;
        let id =req.id;              // Since we are using '/:id', so the user id is stored in req.params.id
            

        // 1st method of updating
        // let user=await collection1.findByIdAndUpdate(id,data);       

        // 2nd method of updating
        let user=await collection1.findById(id);

        if(user){
            const fields=[];
            for(let i in data){
                fields.push(i);          
            }
            for(let i=0;i<fields.length;i++){
                user[fields[i]]=data[fields[i]];
            }
            const updatedData=await user.save();

            res.json({
                message:'Data updated succesfully',
                'Update User':user
            });
        }
        else{
            res.json({
                message:'User not found'
            });
        }
    }
    catch(err){
        res.json({
            message:err.message
        })
    }
}







module.exports.deleteUser= async function deleteUser(req,res){
    try{
        let id =req.params.id;                
        let user=await collection1.findByIdAndDelete(id);
        
        if(user){
            res.json({
                message:'Account deleted succesfully' 
            });
        }
        else{
            res.json({
                message:'User not found' 
            });
        }
    }
    catch(err){
        res.json({
            message:err.message
        })
    }
}






//isAuthorised -> to check the user's role [Admin,User,RestaurantOwner,DeliveryBoy]

module.exports.isAuthorised=function isAuthorised(roles){
    return async function(req,res,next){
        if(roles.includes(req.role)==true){          //Since from frontend roles=['admin'], so if req.role=='admin' only then it will be true;
            next();            
        }
        else{
            res.status(401).json({
                message:'Operation not allowed'
            })
        }
    }
}






