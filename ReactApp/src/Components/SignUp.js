import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import axios from "axios";








export default function SignUp(){

    const [cookies,setCookies,removeCookies]=useCookies();

    const navigate=useNavigate();
    const navigateToAfterlogin=()=>{
        navigate('/afterlogin')
    }
    

    const url='http://127.0.0.1:7000/auth/signup';
    const [data,setData]=useState({
        Name:"",
        Email:"",
        Password:"",
        ConfirmPassword:"",
        PhoneNumber:"",
        UserName:"",
        Year:"FirstYear",
        RollNumber:"",
        Branch:"PoolA"
    })



    function submit(e){
        e.preventDefault();
        axios.post(url,{
        Name: data.Name,
        Email:data.Email,
        Password:data.Password,
        ConfirmPassword:data.ConfirmPassword,
        PhoneNumber:data.PhoneNumber,
        UserName:data.UserName,
        Year:data.Year,
        RollNumber:data.RollNumber,
        Branch:data.Branch
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
                navigateToAfterlogin();
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
                <h1>SignUp</h1>
                    <input  onChange={(e)=>handle(e)} placeholder="Name"  value={data.Name}   type="text" E-mail="Name" id="Name" />
                <br/>
                    <input  onChange={(e)=>handle(e)} placeholder="Email"  value={data.Email}   type="email" E-mail="Email" id="Email" />
                <br/>
                    <input  onChange={(e)=>handle(e)} placeholder="Password"  value={data.Password}   type="password" name="Password" id="Password" />
                <br/>
                    <input  onChange={(e)=>handle(e)} placeholder="Confirm Password"  value={data.ConfirmPassword}   type="password" name="ConfirmPassword" id="ConfirmPassword" />
                <br/>
                    <input  onChange={(e)=>handle(e)} placeholder="Phone No."  value={data.PhoneNumber}   type="number" name="PhoneNumber" id="PhoneNumber" />
                <br/>
                    <input  onChange={(e)=>handle(e)} placeholder="Username"  value={data.UserName}   type="text" name="UserName" id="UserName" />
                <br/>
                    <input  onChange={(e)=>handle(e)} placeholder="Roll No."  value={data.RollNumber}   type="Number" name="RollNumber" id="RollNumber" />
                <br/>
                    <select onChange={(e)=>handle(e)} name="Year" value={data.Year} id="Year">
                        <option value="FirstYear" selected>First</option>
                        <option value="SecondYear">Second</option>
                        <option value="ThirdYear">Third</option>
                    </select>
                <br/>
                    <select onChange={(e)=>handle(e)} name="Branch"  value={data.Branch} id="Branch">
                        <option value="PoolA" selected>Pool A</option>
                        <option value="PoolB">Pool B</option>
                        <option value="Biotech">Biotech department</option>
                        <option value="COPC">COPC</option>
                        <option value="COBS">COBS</option>
                    </select>    
                <br/>
                <button>SignUp</button>                      
                <br/>
            </form>
        </div>
    )
} 
