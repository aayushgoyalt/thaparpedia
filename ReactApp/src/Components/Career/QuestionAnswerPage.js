import React from "react";
import "./QuestionAnswerPage.css";
import { useNavigate } from "react-router-dom";

const QNA = () => {
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
              <h2>Questions & Answers</h2>
            </div>
            <br />
            <section className="question-answer-section">
              <div className="question">
                <h3>
                  What are the career prospects in mechanical engineering?
                </h3>
                <p>
                  Mechanical engineering offers a wide range of career options,
                  such as:
                </p>
                <ul>
                  <li>Automotive engineer</li>
                  <li>Aerospace engineer</li>
                  <li>Energy engineer</li>
                </ul>
              </div>
              <div className="question">
                <h3>
                  What skills are required for a career in computer science?
                </h3>
                <p>
                  Some essential skills for computer science careers include:
                </p>
                <ul>
                  <li>Programming languages (e.g., Python, Java)</li>
                  <li>Data structures and algorithms</li>
                  <li>Problem-solving abilities</li>
                </ul>
              </div>
            </section>
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

export default QNA;
