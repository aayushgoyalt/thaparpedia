import React , { useState,useEffect} from "react";
import "./App.css";
import {Routes,Route,useNavigate} from 'react-router-dom';
import { useCookies } from "react-cookie";
import axios from "axios";



import AfterLogin from "./Components/Acad/AfterLogin";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Authenticate from "./Components/Authenticate";
import Subjects from "./Components/Acad/Subjects";
import SubjectDetails from "./Components/Acad/SubjectDetails/SubjectDetails";
import GPA_Calc from "./Components/Acad/Gpa Calculator/GPA_Calculator";

import HomeCareer from "./Components/Career/HomeCareer";
import GuidanceSection from "./Components/Career/GuidanceSection";
import QNA from "./Components/Career/QuestionAnswerPage";
import News from "./Components/Career/TechNewsPage";



function App(){

  const[message,setMessage]=useState([]);
  function subsArray(arg){
    setMessage(arg);
  }


  return(
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/afterlogin" element={<Authenticate path={<AfterLogin/>} />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/Authenticate" element={<Authenticate />} />
        <Route path="/acad/gpa" element={<Authenticate path={<GPA_Calc/>} />} />
        <Route path="/acad" element={<Authenticate path={<Subjects func={(arg)=>{subsArray(arg)}}/>}/>} />
        {message.map((el)=>{
          return(
                    <Route path={'/acad/'+el.Name} element={<Authenticate path={<SubjectDetails name={el.Name}/>} />}/>  
          )})}         

<Route path={'/acad/'+"Applied Physics"} element={<Authenticate path={<SubjectDetails name={"Applied Physics"}/>} />}/>  

        <Route path="/career" element={<Authenticate path={<HomeCareer/>} />} />
        <Route path="/career/GuidanceSection" element={<Authenticate path={<GuidanceSection/>} />} />
        <Route path="/career/QNA" element={<Authenticate path={<QNA/>} />} />
        <Route path="/career/News" element={<Authenticate path={<News/>} />} />


      </Routes>
    </>
  )
}

export default App;
