import React from "react";
import { useNavigate } from "react-router-dom";
import "./GuidanceSection.css";

const GuidanceSection = () => {
  const navigate = useNavigate();
  return (
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

        {/* offer section */}
        <section className="offer_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>Guidance Section</h2>
            </div>
            <br />
            <section className="guidance-section">
              <h2>Explore Your Career Options</h2>
              <div className="career-options">
                <div className="career-option">
                  <h3>Civil Engineering</h3>
                  <p>Design and construct infrastructure projects.</p>
                  <ul>
                    <li>Roads and bridges</li>
                    <li>Buildings</li>
                    <li>Water and waste management</li>
                  </ul>
                </div>
                <div className="career-option">
                  <h3>Software Engineering</h3>
                  <p>Create and develop software applications.</p>
                  <ul>
                    <li>Web development</li>
                    <li>Mobile app development</li>
                    <li>Data analysis</li>
                  </ul>
                </div>
                <div className="career-option">
                  <h3>Electrical Engineering</h3>
                  <p>Design and develop electrical systems and equipment.</p>
                  <ul>
                    <li>Power generation and distribution</li>
                    <li>Electronic devices</li>
                    <li>Renewable energy</li>
                  </ul>
                </div>
              </div>
              <div className="roadmaps-resources">
                <h3>Roadmaps & Resources</h3>
                <ul>
                  <li>Civil Engineering roadmap</li>
                  <li>Software Engineering roadmap</li>
                  <li>Electrical Engineering roadmap</li>
                </ul>
              </div>
            </section>
            <div className="row"></div>
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
  );
};

export default GuidanceSection;
