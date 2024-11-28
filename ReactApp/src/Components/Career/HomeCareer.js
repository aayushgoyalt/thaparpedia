import { useNavigate } from "react-router-dom";
import React from "react";

export default function HomeCareer() {
  const navigate = useNavigate();

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
                    <div className="container">
                      <div className="heading_container">
                        <h2>Career</h2>
                      </div>
                      <br />
                      <br />
                      <div>
                        <button
                          onClick={() => navigate("/career/GuidanceSection")}
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
                          Guidance Section
                        </button>
                        <button
                          onClick={() => navigate("/career/QNA")}
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
                          QNA
                        </button>
                        <button
                          onClick={() => navigate("/career/News")}
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
                          TechNews
                        </button>
                      </div>
                      <div className="row"></div>
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
