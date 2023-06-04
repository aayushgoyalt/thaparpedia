const express=require('express');
const app=express();
const {Subjects}=require('../Collections/collection1')


const subjectRouter=express.Router();

subjectRouter
.route('/AddSubs')
.get(PoolAPage)
.post(PutCred)


async function PoolAPage(req,res){
    res.sendFile('/AddSubs.html',{root:__dirname});
}

async function PutCred(req,res){
    try{
        let data=req.body;
        console.log(data);

        let user=await Subjects.create(data);
        
            
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