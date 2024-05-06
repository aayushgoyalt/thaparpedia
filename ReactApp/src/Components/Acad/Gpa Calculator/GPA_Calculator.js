import React, { useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { apiUrl } from "../../../config";






export default function GPA_Calc(){

      //for subjects of users
      const[subjects,setSubjects]=useState([]);
      const [cookies,setCookies,removeCookies]=useCookies();
      const url1=apiUrl+'acad';
    
      

      function fetchSubs(){
          axios.post(url1,{
              id:cookies.Id
          })
          .then(res=>{
            console.log(res);
            setSubjects(res.data.data)
          })
      }
    

    

    const [data,setData]=useState({})
    const[gpa,setgpa]=useState("0.00");

    let totcred=0;
    let obtcred=0;

    //Whole Calculation
    function submit(e){
        e.preventDefault();


        const url2=apiUrl+'acad/subDetails';
        

        //Fetching details of a subject
        subjects.forEach((el)=>{
            axios.post(url2,{
                Name:(el.Name)
            })
            .then(res=>{
                console.log(res);
                let subj=(res.data.data);
                let credit=subj.Credit;

                let marks=data[el.Name];
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
    
    const navigate=useNavigate()
    function logout(){
        removeCookies('isLoggedIn');
        removeCookies('Id');
        alert("User logged out succesfully");
        navigate('/');
    }
    
    
    useEffect(()=>{
        fetchSubs();
      },[])
    





    return(
        <>
    <body className="sub_page">
      <div className="hero_area">
        {/* header section starts */}
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="/">
                <img src="images/logo.png" alt="" />
                <span>
                  Thaparpedia
                </span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link" style={{color:"white",backgroundColor:"#b44d4e",border:"none"}} onClick={()=>logout()}> Logout </button>
                    </li>
                   </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* end header section */}
      </div>

      {/* offer section */}
      <section className="offer_section layout_padding">
        <div className="container">
          <div className="heading_container">
          <h2>
          CGPA Calculator
        </h2>
        <p>
          Enter your marks (out of 100) for the following subjects
        </p>
          </div>
          {subjects.map((el)=>{
            let name=el.Name
            return(
                       <>
                <div class="form-group">
                 <span>{el.Name} : </span>
                 <input style={{width:"25%",display:"inline-block",float:"right",clear:"right"}} className="form-field"  onChange={(e)=>handle(e)} placeholder={el.Name}  value={data.name}   type="number" id={el.Name} />
                </div>
    
                       
                       </>
                        )})}
        <button type="Submit" style={{margin:"30px 0px 40px 0px",display:"inline-block",float:"right",clear:"right",background:"#922e2f",color:"white",borderRadius:"2px",border:"1px black solid",padding:"4px 20px"}} onClick={(e)=>submit(e)}>Calculate</button>
        <h1 style={{marginTop:"35px"}}>GPA : {gpa}</h1>
            
        </div>
      </section>
      {/* end offer section */}

      {/* footer section */}
      <section className="container-fluid footer_section">
        <p>
          &copy; 2023 All Rights Reserved By
          <a href="/afterlogin">Thaparpedia</a>
        </p>
      </section>
      {/* footer section */}

      <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
      <script type="text/javascript" src="js/bootstrap.js"></script>
    </body>

    </>
    )
} 