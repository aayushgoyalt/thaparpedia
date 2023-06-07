import React, { useState,useEffect} from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import NavAcad from "../../Navbar/NavAcad";
import { useNavigate } from "react-router-dom";
import './SubjectDetails.css'
// import { useLocation } from "react-router-dom";

export default function SubjectDetails(props){


    const[data,setData]=useState({});
    const[notes,setNotes]=useState([]);
    const[tutes,setTutes]=useState([]);

    
    
    const url='http://127.0.0.1:7000/acad/subDetails';
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
        <div >
            <NavAcad/>
            <div className="MainCard">
                <h1>{data.Subject}</h1>

            <br/><br/>
                <h2>
                    <a href={data.Site} target="_blank">Course Site</a>
                </h2>
            <div className="Details" >
                <h2 >{data.CourseCode}</h2>
                <h3>Cuts -:</h3>
                <p>A    :    {data.A}</p>
                <p>A<sup><b>-</b></sup>   :    {data.Aneg}</p>
                <p>B    :    {data.B}</p>
                <p>B<sup><b>-</b></sup>   :    {data.Bneg}</p>
                <p>C    :    {data.C}</p>
                <p>C<sup><b>-</b></sup>   :    {data.Cneg}</p>
            </div>

            <br/><br/>

            <div className="Notes" >
                <h2>Notes</h2>
                {notes.map((link)=>{
                    return(
                        <>
                    <a href={'http://127.0.0.1:7000/acad/pdf/?link='+link.url} target="_blank">{link.name}</a>
                    <br/>
                    </>
                )})}

            </div>

            <br/><br/>

            <div className="Tutes" >
                <h2>Tutes</h2>
                {tutes.map((link)=>{
                    return(
                        <>
                    <a href={'http://127.0.0.1:7000/acad/pdf/?link='+link.url} target="_blank">{link.name}</a>
                    <br/>
                    </>
                )})}

            </div>
            
           </div>
        </div>
    )
}