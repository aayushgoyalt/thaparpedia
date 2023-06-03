const express=require('express');
const homeRouter=express.Router();
const {getHome,getSubs}=require('../Controllers/HomeFuncs')
const protect=require('../Controllers/protectRouter.js')


homeRouter
.route('')
.get(getHome)


homeRouter
.route('/acad')
.get(protect,getSubs)



module.exports=homeRouter;