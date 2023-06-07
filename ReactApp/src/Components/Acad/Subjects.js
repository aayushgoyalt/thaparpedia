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

    function logout(){
        removeCookies('isLoggedIn');
        removeCookies('Id');
        alert("User logged out succesfully");
        navigate('/');
    }

    return(
        <>
        

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
                  <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="/afterlogin" style={{textDecoration:"none"}}>
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" style={{color:"white",backgroundColor:"#b44d4e",border:"none"}} onClick={()=>logout()}> Logout </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" style={{color:"white",backgroundColor:"#b44d4e",border:"none"}} onClick={()=>navigate('/acad/gpa')}> GPA Calculator</button>
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
              Courses
            </h2>
          </div>
          <div className="row">
          {message.map((el)=>{return(
                <>
                 <div className="col-md-6">
              <button onClick={()=>navigate('/acad/'+el.Name)} style={{ color: 'black',border:"none",background:"white" }}>
                <div className="content-box">
                  <div className="img-box">
             <img src={el.ImgUrl} height="125px" version="1.1" viewBox="-38 0 512 512.00142" width="125px" />
                  </div>
                  <div className="detail-box">
                    <h6>
                      {el.Name}
                    </h6>
                    <p>
                      {el.CourseCode}
                    </p>
                  </div>
                </div>
              </button>
            </div>
                </>
                )
            })}
          </div>
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
        </>
    )
}



