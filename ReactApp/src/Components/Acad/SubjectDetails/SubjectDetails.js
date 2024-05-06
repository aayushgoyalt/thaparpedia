import React, { useState,useEffect} from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import NavAcad from "../../Navbar/NavAcad";
import { useNavigate } from "react-router-dom";
import './SubjectDetails.css'
import { apiUrl } from "../../../config";
// import { useLocation } from "react-router-dom";

export default function SubjectDetails(props){

    const navigate=useNavigate();
    const[data,setData]=useState({});
    const[notes,setNotes]=useState([]);
    const[tutes,setTutes]=useState([]);

    const [cookies,setCookies,removeCookies]=useCookies();
    

    function logout(){
        removeCookies('isLoggedIn');
        removeCookies('Id');
        alert("User logged out succesfully");
        navigate('/');
    }
    
    const url=apiUrl+'acad/subDetails';
    function submit(){
        axios.post(url,{
            Name:props.name
        })
        .then(res=>{
            console.log(res);
            setData(res.data.data);
            setNotes(res.data.Notes);
            setTutes(res.data.Tutes);
        })
    }

    
    useEffect(()=>{
        submit();
    },[])

    return(
        <>
       
    <html lang="en">
      <head>
        {/* Basic */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Mobile Metas */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Site Metas */}
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />

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
                        <a className="nav-link" href="/afterlogin">
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
            <span>
              <h1 style={{ display: 'inline-block' }}>
                <b>{data.Subject}</b>
              </h1>
              <br/><br/>
                <h2>
                    <a href={data.Site} target="_blank">Course Site</a>
                </h2>
            </span>
            <br/>
            <h2 >{data.CourseCode}</h2>

            <br />
            <br />

            <div className="row">
              <div className="card col-md">
                <div>
                  <h3>
                    <u><b>Notes</b></u>:
                  </h3>
                  <ol>
                    {notes.map((link)=>{
                    return(
                        <>
                    <li><a href={apiUrl+'acad/pdf/?link='+link.url} target="_blank">{link.name}</a></li>
         
                    </>
                )})}
                  </ol>
                </div>
              </div>
              <div className="card col-md">
                <div>
                  <h3>
                    <u><b>Tutorial Sheets</b></u>:
                  </h3>
                  <ol>
                    {tutes.map((link)=>{
                    return(
                        <>
                    <li><a href={apiUrl+'acad/pdf/?link='+link.url} target="_blank">{link.name}</a></li>
                    </>
                )})}
                  </ol>
                </div>
              </div>
              <div className="card col-md">
                <div>
                  <h3>
                    <u><b>Cut-offs (2022)</b></u>:
                  </h3>
                  <b>
                    <ul>
                        <li><p>A    :    {data.A}</p></li>
                        <li><p>A<sup><b>-</b></sup>   :    {data.Aneg}</p></li>
                        <li><p>B    :    {data.B}</p></li>
                        <li><p>B<sup><b>-</b></sup>   :    {data.Bneg}</p></li>
                        <li><p>C    :    {data.C}</p></li>
                        <li><p>C<sup><b>-</b></sup>   :    {data.Cneg}</p></li>
                    </ul>
                  </b>
                </div>
              </div>
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
    </html>

        
        
        </>
    )
}