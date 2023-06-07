import React, { useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,Route,Routes } from 'react-router-dom';
import { useCookies } from "react-cookie";

import SubjectDetails from "./SubjectDetails/SubjectDetails";
import NavAcad from "../Navbar/NavAcad";



export default function Subjects(props){

    const[message,setMessage]=useState([]);
    const [cookies,setCookies,removeCookies]=useCookies();

    const navigate=useNavigate();
    
    const url='http://127.0.0.1:7000/acad';
    function submit(){
        axios.post(url,{
            id:cookies.Id
        })
        .then(res=>{
            setMessage(res.data.data);
        })
    }
    submit();

    props.func(message);

    return(
        <div>
            <NavAcad/>
            <div className="MainCard"> 
            <br/>
            {message.map((el)=>{return(
                <>
                    <button onClick={()=>navigate('/acad/'+el)}>
                        {el}
                    </button>
                </>
                )
            })}
            </div>
            <footer></footer>
        </div>
    )
}



