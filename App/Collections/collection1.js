const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
var validator = require("email-validator");


const db_link='mongodb+srv://parianshm:15903570Pm@cluster0.4ghrvqf.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db_link)
.then(function(i){
    console.log('Database Connected');
})
.catch(function(err){
    console.log(err);
})


const userSchema=mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,   
        required:true,
        unique:true,
        validate:function(){
            return validator.validate(this.Email);
        }
    },
    Password:{
        type:String,
        required:true,
        minLength:8,
    },
    ConfirmPassword:{
        type:String,
        required:true,
        minLength:8,
        validate:function(){                                                               
            //Confirming Password....
            return this.ConfirmPassword==this.Password;
        }
    },
    PhoneNumber:{
        type:Number,
        required:true,
    },
    UserName:{
        type:String,
        required:true,
        unique:true,
    },
    Year:{
        type:String,
        required:true,
    },
    RollNumber:{
        type:String,
        required:true,
        unique:true
    },
    Branch:{
        type:String,
        required:true,
    }
})


userSchema.pre('save',function(){
    this.ConfirmPassword=undefined;
});




const collection1=mongoose.model('collection1',userSchema);
module.exports=collection1;