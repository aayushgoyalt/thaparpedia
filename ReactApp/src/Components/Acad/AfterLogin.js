import React, { useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import NavAcad from "../Navbar/NavAcad";




export default function AfterLogin(){
    
    const [cookies,setCookies,removeCookies]=useCookies();

    const navigate=useNavigate();
    const navigateToacad=()=>{
        navigate('/acad')
    }
    const navigateTocareer=()=>{
        navigate('/career')
    }

    function logout(){
        removeCookies('isLoggedIn');
        removeCookies('Id');
        alert("User logged out succesfully");
        navigate('/');
    }


    return(
        <>
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
                 <ul className="navbar-nav  ">
                   <li className="nav-item active">
                     <a className="nav-link" href="/" style={{textDecoration:"none"}}>
                       Home <span className="sr-only">(current)</span>
                     </a>
                   </li>
                   <li className="nav-item">
                    <button className="nav-link" style={{color:"white",backgroundColor:"#b44d4e",border:"none"}} onClick={()=>logout()}> Logout </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" style={{color:"white",backgroundColor:"#b44d4e",border:"none"}} onClick={()=>navigate('/acad/gpa')}> GPA Calculator</button>
                   </li>
                 </ul>
               </div>
             </div>
           </nav>
         </div>
       </header>
       {/* end header section */}
       
       {/* slider section */}
       <section className="slider_section position-relative">
         <div className="container">
           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
             <div className="carousel-inner">
               <div className="carousel-item active">
                 <div className="row">
                   <div className="col-md-6">
                     <div className="detail-box">
                       <div className="btn-box">
                         <button onClick={navigateToacad}   style={{margin:"0px 24px 0px 14px",border:"2px #922e2f solid",borderRadius:"40px",backgroundColor:"#b44d4e",boxShadow:"0px 0px 22px black"}} className="btn-1">
                           Academic
                         </button>
                         <button onClick={navigateTocareer} style={{border:"2px #922e2f solid",borderRadius:"40px",backgroundColor:"#b44d4e",boxShadow:"0px 0px 22px black"}} className="btn-2">
                           Career
                         </button>
                         <br/>
                         <br/>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* end slider section */}
     </div>
 
 
        </> 
     )
 } 