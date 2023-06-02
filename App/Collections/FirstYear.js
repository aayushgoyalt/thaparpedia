const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
var validator = require("email-validator");


const db_link='mongodb+srv://parianshm:15903570Pm@cluster0.4ghrvqf.mongodb.net/FirstYear?retryWrites=true&w=majority';
mongoose.FirstYear=mongoose.createConnection(db_link)



const subject=mongoose.Schema({

    Subject:{
        type:String,
        required:true
    },
    A:{
        type:Number,
        required:true
    },
    Aneg:{
        type:Number,
        required:true
    },
    B:{
        type:Number,
        required:true
    },
    Bneg:{
        type:Number,
        required:true
    },
})

const PoolA=mongoose.FirstYear.model('PoolA',subject);


module.exports=PoolA; 