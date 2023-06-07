import React, { useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import NavAcad from "../Navbar/NavAcad";




export default function AfterLogin(){
    
    const navigate=useNavigate();
    const navigateToacad=()=>{
        navigate('/acad')
    }
    const navigateTocareer=()=>{
        navigate('/career')
    }



    return(
        
        <div className="Home-Background">
                    <NavAcad/>
                    <br/>
                    <button onClick={navigateToacad}>Academic Section</button>
                    <button onClick={navigateTocareer}>Career Section</button>
        </div>
    )
} 