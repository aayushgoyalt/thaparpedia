import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useCookies } from "react-cookie";





export default function Login(){
    
    const [cookies,setCookies,removeCookies]=useCookies();

    const navigate=useNavigate();
    const navigateToAfterlogin=()=>{
        navigate('/afterlogin')
    }
    

    const url='http://127.0.0.1:7000/auth/login';
    const [data,setData]=useState({
        Email:"",
        Password:"",
    })



    function submit(e){
        e.preventDefault();
        axios.post(url,{
        Email:data.Email,
        Password:data.Password
        })
        .then(res=>{
            alert(res.data.message)
            if(res.data.loginStatus){
                setCookies('isLoggedIn',res.data.token,{
                    maxAge:1000*60*60*24
                });
                setCookies('Id',res.data.UserDetails._id,{
                    maxAge:1000*60*60*24
                });
            }
        })
    }

    


    function handle(e){
        const newdata={...data};
        newdata[e.target.id]=e.target.value;
        setData(newdata);
    }


    return(
        
        <div className="Home-Background">
            <form class="myform" onSubmit={(e)=>submit(e)}>
                <h1>Login</h1>
                    <input  onChange={(e)=>handle(e)} placeholder="Email"  value={data.Email}   type="email" E-mail="Email" id="Email" />
                <br/>
                    <input  onChange={(e)=>handle(e)} placeholder="Password"  value={data.Password}   type="password" name="Password" id="Password" />
                <br/>
                <button>Login</button>            
                <button onClick={navigateToAfterlogin}>Proceed</button>            
                <br/>
            </form>
        </div>
    )
} 