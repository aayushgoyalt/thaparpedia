const express=require('express');

const homeRouter=express.Router();

homeRouter
.route('')
.get(getHome)

function getHome(req,res){
    res.json({
        message:"Hello"
    })
}

module.exports=homeRouter;