const express=require('express');
const app=express();
const PoolA=require('../Collections/FirstYear')


const subjectRouter=express.Router();

subjectRouter
.route('/PoolA')
.get(PoolAPage)
.post(PutCred)


async function PoolAPage(req,res){
    res.sendFile('C:/Users/paria/Desktop/Thaparpedia 2/App/Public/PoolA.html');
}

async function PutCred(req,res){
    try{
        let data=req.body;
        console.log(data);

        let user=await PoolA.create(data);
        
            
        res.json({
            message:"User signed up",
            data:data                       
        });
        
    }
    catch(err){
        res.json({
            message:err.message
        })
    }
}

module.exports=subjectRouter;