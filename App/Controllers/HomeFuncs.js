const {collection1,Subjects,Pool}=require('../Collections/collection1');



module.exports.getHome= async function getHome(req,res){
    res.json({
        message:"Hello"
    })
}

module.exports.getSections= async function getSections(req,res){
    const data=["Academic Section","Career Section"]
    res.json({
            data:data,
            auth:true               
            });
}


 
module.exports.getSubs=async function getSubs(req,res){
    let user=await collection1.findById(req.id);

    let pool=await Pool.findOne({Pool:user.Branch,Year:user.Year})
    let Idlist=pool.Subject;
    
    
    const getWithPromiseAll = async() => {
        let data = await Promise.all(Idlist.map(async (el) => {
            let temp=await Subjects.findById(el);
            return (temp.Subject);
        }))
        res.json({data:data});
     }
     getWithPromiseAll();
}