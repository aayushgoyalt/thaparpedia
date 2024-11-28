import React from "react";
import "./TechNewsPage.css";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();
  return (
    <>
      <>
        <body className="sub_page">
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
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/afterlogin"
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
                            Logout{" "}
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
                            onClick={() => navigate("/acad/gpa")}
                          >
                            {" "}
                            GPA Calculator
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </header>
            {/* end header section */}
          </div>
          {/* tester */}
          {/* offer section */}
          <section
            className="offer_section layout_padding"
            style={{ padding: "30px 30px 30px 30px" }}
          >
            <section className="tech-news-section">
              <h2>Latest Tech News</h2>
              <div className="news">
                <div className="news-item">
                  <h3>
                    AI Breakthrough: New Algorithm Achieves Human-Level
                    Performance in Image Recognition
                  </h3>
                  <p>
                    Researchers have developed an AI algorithm that matches
                    human-level performance in image recognition tasks.
                  </p>
                </div>
                <div className="news-item">
                  <h3>
                    SpaceX Successfully Launches Falcon Heavy Rocket, Carrying
                    Satellites into Orbit
                  </h3>
                  <p>
                    SpaceX's Falcon Heavy rocket successfully launched and
                    deployed multiple satellites into orbit.
                  </p>
                </div>
                <div className="news-item">
                  <h3>
                    5G Revolution: New Wireless Network Technology Promises
                    Faster Speeds and Lower Latency
                  </h3>
                  <p>
                    5G technology is set to revolutionize wireless communication
                    with its faster speeds and lower latency.
                  </p>
                </div>
              </div>
            </section>
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
    </>
  );
};

export default News;
