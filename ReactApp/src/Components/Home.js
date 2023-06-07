import React, { useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import NavHome from "./Navbar/NavHome";





export default function Home(){
    
    // const[message,setMessage]=useState([]);

    const navigate=useNavigate();
    const navigateToacad=()=>{
        navigate('/acad')
    }
    const navigateTocareer=()=>{
        navigate('/career')
    }

    // useEffect(()=>{
    //   fetch('http://127.0.0.1:7000/afterlogin')
    //   .then((res)=>res.json())
    //   .then((data)=>setMessage(data.data));
    // },[])


    



    return(
        
        <div className="Home-Background">
                    <NavHome/>
                    <br/>
                    <button onClick={navigateToacad}>Academic Section</button>
                    <button onClick={navigateTocareer}>Career Section</button>
        </div>
    )
} 