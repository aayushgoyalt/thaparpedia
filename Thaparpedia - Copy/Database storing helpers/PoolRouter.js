const express=require('express');
const app=express();
const {Subjects,Pool}=require('../Collections/collection1')


const PoolRouter=express.Router();

PoolRouter
.route('/AddIds')
.get(PoolAPage)
.post(PutCred)


async function PoolAPage(req,res){
    res.sendFile('/AddIds.html',{root:__dirname});
}

async function PutCred(req,res){
    try{
        let data=req.body;
        console.log(data);

        
        let temp=await Subjects.findOne({Subject:data.SubjectName});
        

        let poolobj={
            Pool:data.Pool,
            Subject:data.Subject,
            Year:data.Year
        }

        let find =await Pool.findOne({Pool:data.Pool});


        if(find){
            poolobj.Subject=[...find.Subject,temp._id]
            let user=await Pool.findByIdAndUpdate(find._id,poolobj)
        }
        else{
            poolobj.Subject=[...data.Subject,temp._id]
            let user=await Pool.create(poolobj);
        }
            
        res.json({
            message:"Subject Id Added",
        });
        
    }
    catch(err){
        res.json({
            message:err.message
        })
    }
}

module.exports=PoolRouter;