import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
   

import AfterLogin from "./Acad/AfterLogin";
import Subjects from "./Acad/Subjects";
import SubjectDetails from "./Acad/SubjectDetails/SubjectDetails";

export default function Authenticate(props){
    
    const [cookies,setCookies]= useCookies();
    const navigate=useNavigate();
    const navigateToauth=()=>{
        navigate('/')
    }



    let [message,setMessage]=useState();
    


    const url='http://127.0.0.1:7000/protect';

    function submit(){
        axios.post(url,{
            token:cookies.isLoggedIn
        })
        .then(res=>{
            if(res.data.auth){
                setMessage(1);
            }
            else{
                alert(res.data.message);
                navigateToauth();
            }
        })
    }
    submit();
    
    
    
    if(message==1){
        return(props.path)
    }
}
