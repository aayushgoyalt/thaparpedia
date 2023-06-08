const {collection1}=require('../Collections/collection1');
const jwt=require('jsonwebtoken');
const secret_key='asdfghjkl';




module.exports.getSigned= async function getSigned(req,res){
    res.sendFile('C:/Users/paria/Desktop/Thaparpedia 2/App/Public/Signup.html');
}






module.exports.Signup= async function Signup(req,res){
    try{
        let data=req.body;
        let user=await collection1.create(data);
        
        const userm=await collection1.findOne({Email:user.Email});
         const uuid=userm._id;
                const token=jwt.sign({payload:uuid},secret_key);
                res.cookie('isLoggedIn',token,{
                    maxAge:1000*60*60*24
                });    
        res.json({
            message:"User signed up",
            loginStatus:true,
            data:data,
            newuser:userm,
            token:token                       
        });
       
        
    }
    catch(err){
        res.json({
            message:err.message
        })
    }
}





module.exports.getlogin= async function getlogin(req,res){
    res.sendFile('C:/Users/paria/Desktop/Thaparpedia 2/App/Public/Login.html');
}







module.exports.login= async function login(req,res){
    try{
        let data=req.body;
        const user=await collection1.findOne({Email:data.Email});
        if(user){
            if(user.Password===data.Password){
                
                const uuid=user._id;
                const token=jwt.sign({payload:uuid},secret_key);
                res.cookie('isLoggedIn',token,{
                    maxAge:1000*60*60*24
                });
                
                return res.json({
                    message:"User LoggedIn Successfully",
                    UserDetails:user,
                    loginStatus:true,
                    token:token                       
                }) 
            }
            else{
                return res.json({
                    message:'Incorrect Password',
                    loginStatus:false                       
                });
            }
        }
        else{
            return res.json({
                message:'User does not exist',
                loginStatus:false                       
            });
        }
    }
    catch(err){
        return res.json({
            message:err.message
        });
    }
}








module.exports.logout=async function logout(req,res){
    res.clearCookie('isLoggedIn');
    return res.json({
        message:'User Logged Out'
    });
}
