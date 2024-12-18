import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
   

import AfterLogin from "./Acad/AfterLogin";
import Subjects from "./Acad/Subjects";
import SubjectDetails from "./Acad/SubjectDetails/SubjectDetails";
import { apiUrl } from "../config";

export default function Authenticate(props){
    
    const [cookies,setCookies]= useCookies();
    const navigate=useNavigate();
    const navigateToauth=()=>{
        navigate('/')
    }



    let [message,setMessage]=useState();
    


    const url=apiUrl+'protect';

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
