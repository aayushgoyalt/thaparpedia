import React, { useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";




export default function NavAcad(){
    
    const [cookies,setCookies,removeCookies]=useCookies();
    const navigate=useNavigate();
    

    function logout(){
        removeCookies('isLoggedIn');
        removeCookies('Id');
        alert("User logged out succesfully");
        navigate('/');
    }



    return(
        
        <div className="Home-Background">
                    <button onClick={()=>logout()}>Logout</button>
                    <button onClick={()=>navigate('/acad/gpa')}>GPA Calculator</button>
        </div>
    )
} 