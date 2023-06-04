const express=require('express');
const homeRouter=express.Router();
const {getHome,getSections,getSubs}=require('../Controllers/HomeFuncs')
const protect=require('../Controllers/protectRouter.js')


homeRouter
.route('')
.get(getHome)

homeRouter
.route('/afterlogin')
.get(protect,getSections)


homeRouter
.route('/acad')
.get(protect,getSubs)



module.exports=homeRouter;