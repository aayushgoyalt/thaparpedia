import React from "react";
import { useNavigate } from 'react-router-dom';





export default function NavHome(){

    const navigate=useNavigate();
    
    return(
        
        <div className="Home-Background">
                    <button onClick={()=>navigate('/auth/login')}>Login</button>
                    <button onClick={()=>navigate('/auth/signup')}>SignUp</button>
        </div>
    )
} 