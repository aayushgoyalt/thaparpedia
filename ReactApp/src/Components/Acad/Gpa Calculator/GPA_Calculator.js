import React, { useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";






export default function GPA_Calc(){

      //for subjects of users
      const[subjects,setSubjects]=useState([]);
      const [cookies,setCookies,removeCookies]=useCookies();
      const url1='http://127.0.0.1:7000/acad';
    
      useEffect(()=>{
        fetchSubs();
      },[])

      function fetchSubs(){
          axios.post(url1,{
              id:cookies.Id
          })
          .then(res=>{
              setSubjects(res.data.data);
          })
      }
    



    const [data,setData]=useState({})
    const[gpa,setgpa]=useState("0.00");

    let totcred=0;
    let obtcred=0;

    //Whole Calculation
    function submit(e){
        e.preventDefault();


        const url2='http://127.0.0.1:7000/acad/subDetails';
        
        

        //Fetching details of a subject
        subjects.forEach((el)=>{
            axios.post(url2,{
                Name:el
            })
            .then(res=>{
                console.log(res);
                let subj=(res.data.data);
                let credit=subj.Credit;

                let marks=data[el];
                let grade=0;
                if(marks>=subj.A){grade=10}
                else if(marks<subj.A&&marks>=subj.Aneg)(grade=9)
                else if(marks<subj.Aneg&&marks>=subj.B)(grade=8)
                else if(marks<subj.B&&marks>=subj.Bneg)(grade=7)
                else if(marks<subj.Bneg&&marks>=subj.C)(grade=6)
                else if(marks<subj.C&&marks>=subj.Cneg)(grade=5)
                else if(marks<subj.Cneg&&marks>=subj.F)(grade=0)
                
                let gd=(grade)/10
                let cred=(credit)*gd
                totcred=totcred+credit;
                obtcred=obtcred+cred;
                
                let cgpa=obtcred/totcred;
                setgpa((cgpa*10).toFixed(2));
            })
            
        })

    }
    
    
    
    
    
    
    
    console.log(gpa);
    
    
  


    
    


    //Updating entered data
    function handle(e){
        const newdata={...data};
        newdata[e.target.id]=e.target.value;
        setData(newdata);
    }
    
    
    
    
    





    return(
        <div className="Home-Background" >
            <form class="myform" onSubmit={(e)=>submit(e)}>
                <h1>GPA Calculator</h1>
                    {subjects.map((el)=>{return(
                        <input  onChange={(e)=>handle(e)} placeholder={el}  value={data.el}   type="number" id={el} />
                    )})}
                <button type="Submit" onClick={(e)=>submit(e)}>Calculate</button>
                <h1>GPA:{gpa}</h1>
            </form>
        </div>
    )
} 