const {collection1,Subjects,Pool}=require('../Collections/collection1');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
    

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
    try{
        let user=await collection1.findById(req.body.id);

        let pool=await Pool.findOne({Pool:user.Branch,Year:user.Year})
        let Idlist=pool.Subject;
        
        const getWithPromiseAll = async() => {
            let data = await Promise.all(Idlist.map(async (el) => {
                let temp=await Subjects.findById(el);
                return (temp.Subject);
            }))
            res.json({data:data,
                      auth:true           
            });
         }
         getWithPromiseAll();
    }
    catch(err){
        return res.json({
            message:err.message
        });
    }
}



module.exports.subDetails=async function subDetails(req,res){
    try{
        let subject=await Subjects.findOne({Subject:req.body.Name});



        //Documents Notes
        const NotesPath = path.join(__dirname, './Data/'+req.body.Name+'/Notes');
        const Notesfiles = fs.readdirSync(NotesPath).map((name) => {
            return {
                name: path.basename(name, '.pdf'),
                url: `./Controllers/Data/${req.body.Name}/Notes/${name}`,
            };
        });


        //Document Tutes
        const TutePath = path.join(__dirname, './Data/'+req.body.Name+'/Tutes');
        const Tutesfiles = fs.readdirSync(TutePath).map((name) => {
            return {
                name: path.basename(name, '.pdf'),
                url: `./Controllers/Data/${req.body.Name}/Notes/${name}`,
            };
        });

        


        res.json({
            data:subject,
            Notes:Notesfiles,
            Tutes:Tutesfiles
        });
    }
    catch(err){
        return res.json({
            message:err.message
        });
    }
}


