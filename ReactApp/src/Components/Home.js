import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavHome from "./Navbar/NavHome";
// import "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css";
import "./UI/css/bootstrap.css";
import "./UI/css/style.css";
import "./UI/css/responsive.css";
// import "https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,700|Roboto:400,700&display=swap";

export default function Home() {
  // const[message,setMessage]=useState([]);

  const navigate = useNavigate();
  const navigateToacad = () => {
    navigate("/acad");
  };
  const navigateTocareer = () => {
    navigate("/career");
  };

  // useEffect(()=>{
  //   .then((res)=>res.json())
  //   .then((data)=>setMessage(data.data));
  // },[])

  return (
    <>
      <div className="hero_area">
        {/* header section starts */}
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="/">
                <img src="images/logo.png" alt="" />
                <span>Thaparpedia</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <a
                        className="nav-link"
                        href="/"
                        style={{ textDecoration: "none" }}
                      >
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        style={{
                          color: "white",
                          backgroundColor: "#b44d4e",
                          border: "none",
                        }}
                        onClick={() => navigate("/auth/signup")}
                      >
                        {" "}
                        Sign Up{" "}
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        style={{
                          color: "white",
                          backgroundColor: "#b44d4e",
                          border: "none",
                        }}
                        onClick={() => navigate("/auth/login")}
                      >
                        {" "}
                        Login
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* end header section */}

        {/* slider section */}
        <section className="slider_section position-relative">
          <div className="container">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <div className="btn-box">
                          <button
                            onClick={navigateToacad}
                            style={{
                              marginLeft: "80px",
                              marginTop: "20px",
                              border: "1px black solid",
                              borderRadius: "2px",
                              padding: "2.5px 20px",
                              background: "#922e2f",
                              color: "white",
                              padding: "10px 50px",
                              fontSize: "20px",
                            }}
                            className="btn-1"
                          >
                            Academic
                          </button>
                          <button
                            onClick={navigateTocareer}
                            style={{
                              marginLeft: "20px",
                              border: "1px black solid",
                              borderRadius: "2px",
                              padding: "2.5px 20px",
                              background: "#922e2f",
                              color: "white",
                              padding: "10px 50px",
                              fontSize: "20px",
                            }}
                            className="btn-2"
                          >
                            Career
                          </button>
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
    </>
  );
}
