const express=require('express');
const homeRouter=express.Router();
const {getHome,getSections,getSubs,subDetails}=require('../Controllers/HomeFuncs')


homeRouter
.route('')
.get(getHome)

homeRouter
.route('/afterlogin')
.get(getSections)


homeRouter
.route('/acad')
.post(getSubs)

homeRouter
.route('/acad/subDetails')
.post(subDetails)



module.exports=homeRouter;