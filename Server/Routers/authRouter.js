const express=require('express');
const app=express();

const cookieParser=require('cookie-parser');
app.use(cookieParser()); 

const {getSigned,Signup,getlogin,login,logout}=require('../Controllers/AuthFuncs.js');

const authRouter=express.Router();

authRouter
.route('/signup')
.get(getSigned)
.post(Signup)

authRouter
.route('/login')
.get(getlogin)
.post(login)

authRouter
.route('/logout')
.get(logout)

authRouter
.route('/profilePage')
.get(getCookies);




authRouter
.route('/getCookies')
.get(getCookies)
authRouter
.route('/setCookies')
.get(setCookies)

function setCookies(req,res){
    
    res.cookie('hash',true,{
        maxAge:1000*60*60*24,                                           //Time in mili-seconds, here its 1-day (1000*60*60*24)
        httpOnly:true
    });         

    res.send('Cookies has been set');                                                               // httpOnly=true, So that it won't be accessible from frontend
}


function getCookies(req,res){
    let cookies=req.cookies;
    let cookiesLoggedIn=req.cookies.hash;                         //because req.cookies returning an object containing name and value of cookie.
    console.log(cookiesLoggedIn);
    res.send('Cookies recieved');
}

module.exports=authRouter;