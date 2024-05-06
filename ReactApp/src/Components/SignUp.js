import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import axios from "axios";
import { apiUrl } from "../config";








export default function SignUp(){

    const [cookies,setCookies,removeCookies]=useCookies();

    const navigate=useNavigate();
    const navigateToAfterlogin=()=>{
        navigate('/afterlogin')
    }
    

    const url=apiUrl+'auth/signup';
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
                setCookies('Id',res.data.newuser._id,{
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
        <>
    <html lang="en">
      <head>
        {/* Basic */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Mobile Metas */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        

        <title>Thaparpedia</title>

        {/* slider stylesheet */}
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css" />

        {/* bootstrap core css */}
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />

        {/* fonts style */}
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,700|Roboto:400,700&display=swap" rel="stylesheet" />

        {/* Custom styles for this template */}
        <link href="css/style.css" rel="stylesheet" />
        {/* responsive style */}
        <link href="css/responsive.css" rel="stylesheet" />
      </head>

      <body className="sub_page">
        <div className="hero_area">
          {/* header section starts */}
          <header className="header_section">
            <div className="container">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="/">
                  <img src="images/logo.png" alt="" />
                  <span>
                    Thaparpedia
                  </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav  ">
                      <li className="nav-item ">
                        <a className="nav-link" href="/">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          {/* end header section */}
        </div>

        {/* offer section */}
        <section className="offer_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>
               SignUp
              </h2>
            </div>
            <form class="form-group" onSubmit={(e)=>submit(e)}>
                    <input style={{marginBottom:"10px"}}  onChange={(e)=>handle(e)} placeholder="Name"  value={data.Name}   type="text" E-mail="Name" id="Name" />
                <br/>
                    <input style={{marginBottom:"10px"}}  onChange={(e)=>handle(e)} placeholder="Email"  value={data.Email}   type="email" E-mail="Email" id="Email" />
                <br/>
                    <input style={{marginBottom:"10px"}}  onChange={(e)=>handle(e)} placeholder="Password"  value={data.Password}   type="password" name="Password" id="Password" />
                <br/>
                    <input style={{marginBottom:"10px"}}  onChange={(e)=>handle(e)} placeholder="Confirm Password"  value={data.ConfirmPassword}   type="password" name="ConfirmPassword" id="ConfirmPassword" />
                <br/>
                    <input style={{marginBottom:"10px"}}  onChange={(e)=>handle(e)} placeholder="Phone No."  value={data.PhoneNumber}   type="number" name="PhoneNumber" id="PhoneNumber" />
                <br/>
                    <input style={{marginBottom:"10px"}}  onChange={(e)=>handle(e)} placeholder="Username"  value={data.UserName}   type="text" name="UserName" id="UserName" />
                <br/>
                    <input style={{marginBottom:"10px"}}  onChange={(e)=>handle(e)} placeholder="Roll No."  value={data.RollNumber}   type="Number" name="RollNumber" id="RollNumber" />
                <br/>
                    <select style={{marginBottom:"10px"}}  onChange={(e)=>handle(e)} name="Year" value={data.Year} id="Year">
                        <option value="FirstYear" selected>First</option>
                        <option value="SecondYear">Second</option>
                        <option value="ThirdYear">Third</option>
                    </select>
                <br/>
                    <select style={{marginBottom:"10px"}}  onChange={(e)=>handle(e)} name="Branch"  value={data.Branch} id="Branch">
                        <option value="PoolA" selected>Pool A</option>
                        <option value="PoolB">Pool B</option>
                        <option value="Biotech">Biotech department</option>
                        <option value="COPC">COPC</option>
                        <option value="COBS">COBS</option>
                    </select>    
                <br/>
                <button  style={{border:"1px black solid",borderRadius:"2px",padding:"2.5px 20px",background:"#922e2f",color:"white",marginTop:"10px"}} >SignUp</button>                      
                <br/>
            </form>



          </div>
        </section>
        {/* end offer section */}

        {/* footer section */}
        <section className="container-fluid footer_section">
          <p>
            &copy; 2023 All Rights Reserved By
            <a href="/afterlogin">Thaparpedia</a>
          </p>
        </section>
        {/* footer section */}

        <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
      </body>
    </html>

        </>
    )
} 
