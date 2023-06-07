import { useNavigate } from "react-router-dom";
import React from "react";

export default function HomeCareer(){
    const navigate=useNavigate();

    return(
        <>
        <button onClick={()=>navigate('/career/GuidanceSection')}>Guidance Section</button>
        <button onClick={()=>navigate('/career/QNA')}>QNA</button>
        <button onClick={()=>navigate('/career/News')}>TechNews</button>
        </>
    )
}