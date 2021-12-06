import "./App.css";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ComputerSharpIcon from "@mui/icons-material/ComputerSharp";
import CodeIcon from "@mui/icons-material/Code";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

function About() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <span className="x"> Hari Yadharth</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"> </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"></a>
              </li>
            </ul>
            <form class="d-flex">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#sectionm"
                  >
                    <span className="y"> Home</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#sectiona"
                  >
                    <span className="y"> About</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#sectionb"
                  >
                    <span className="y"> Skills</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#sectionc"
                  >
                    <span className="y"> Projects</span>
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
      <div>
        <div className="name" id="sectionm">
          <div className="bg">
            <div className="hari">
              <span style={{ fontFamily: "'Outfit', sans-serif" }}>I am</span>
              &nbsp; Hari Yadharth GC
            </div>
            <div className="full">
              <u>Full Stack Developer</u>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="con">
        <div className="row" id="sectiona" style={{ backgroundColor: "white" }}>
          <div className="col-lg-6" style={{ paddingTop: "7px" }}>
            <div className="row">
              <div className="col-lg-5" id="parta">
                <div className="imga">
                  <img src="./images/Yadharth.jpg" className="hariimg" />
                </div>
              </div>
              <div className="col-lg-7" id="partb">
                <div className="keyans">
                  <span className="key">
                    <span className="key">Name: </span>
                  </span>
                  Hari Yadharth
                </div>
                <div className="keyans">
                  <span className="key">
                    <span className="key">Profile: </span>
                  </span>
                  Full stack developer
                </div>
                <div className="keyans">
                  <span className="key">
                    <span className="key">Email: </span>
                  </span>
                  ganeshyadharth@gmail.com
                </div>
                <div className="keyans" style={{ marginTop: "3%" }}>
                  <div className="icons">
                    <a
                      href="mailto:ganeshyadharth@gmail.com"
                      target="_blank"
                      title="ganeshyadharth@gmail.com"
                    >
                      <EmailIcon id="email" style={{ marginLeft: "5%" }} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yadharth/"
                      target="_blank"
                      title="https://www.linkedin.com/in/yadharth/"
                    >
                      <LinkedInIcon id="in" style={{ marginLeft: "5%" }} />
                    </a>
                    <a
                      href="https://github.com/YadharthGC?tab=repositories"
                      target="_blank"
                      title="https://github.com/YadharthGC?tab=repositories"
                    >
                      <GitHubIcon id="git" style={{ marginLeft: "2%" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12" id="partc">
                <div className="parte">
                  <div className="partx">
                    <div className="skills">
                      <u>
                        <span className="main">Skills</span>
                      </u>
                    </div>
                    <div className="skilla">
                      <div className="skill">C-programming</div>
                      <div className="skill">C++</div>
                      <div className="skill">Javascript</div>
                      <div className="skill">HTML</div>
                      <div className="skill">CSS</div>
                      <div className="skill">Bootstrap</div>
                      <div className="skill">Reactjs</div>
                      <div className="skill">Nodejs</div>
                      <div className="skill">Mongodb</div>
                      <div className="skill">Express</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" id="partd">
            <div className="new">
              <div className="me">
                <u>
                  <span className="main">About me</span>
                </u>
              </div>
              <div>
                Recently graduated Engineering Fresher who is ready to apply the
                knowledge into practice.Skilled in MongoDB, Nodejs, Reactjs and
                Linux. Strong Knowledge of website stacks HTML,CSS and
                Javascript . With my native language Tamil, I am fine with
                English and Telugu.
              </div>
              <div className="resumebtn">
                <a
                  href="https://drive.google.com/file/d/1lbHCpoc6hFkUJDIYor5Y9eb7ku91ippD/view"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <button className="resume">
                    <span className="main">Resume</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="spll" id="sectionb">
          <div className="spl">
            <span className="main" style={{ fontSize: "25px" }}>
              Specilizing in
            </span>
            <div className="main">
              <u>Skills</u>
            </div>
          </div>
          <div className="data">
            <div className="dataone">
              <div className="wd">
                {" "}
                <span className="main">Web Design</span>
              </div>
              <div className="wi">
                <ComputerSharpIcon id="csicon" />
              </div>
              <div className="wt">
                Web design is the process of creating websites. It encompasses
                seversl different aspects, including webpage layout, content
                production and graphic design
              </div>
            </div>
            <div className="dataone">
              <div className="wd">
                <span className="main">Web Development</span>
              </div>
              <div className="wi">
                <CodeIcon id="cdicon" />
              </div>
              <div className="wt">
                Web development refers to building, creating websites. It
                includes aspects such as web design, web publishing, web
                programming and database management.
              </div>
            </div>
            <div className="dataone">
              <div className="wd">
                <span className="main">Responsive Design</span>
              </div>
              <div className="wi">
                <PhoneAndroidIcon id="paicon" />
              </div>
              <div className="wt">
                Responsive web design is about creating web pages that look good
                on all devices! A responsive web design will automatically
                adjust for different screen sizes
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="proz" id="sectionc">
          <div style={{ textAlign: "center" }}>
            <span className="main" style={{ fontSize: "25px" }}>
              PORTFOLIO
            </span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="main">
              <u>Projects Developed by me</u>
            </span>
          </div>
          <div className="data">
            <div className="dataone">
              <div className="wi">
                <a href="https://yadharthservice.netlify.app/" target="_blank">
                  <img
                    src="./images/service.png"
                    class="imgs"
                    title="online service booking"
                  />
                </a>
              </div>
              <div className="wt">Online motorcycle service booking</div>
            </div>
            <div className="dataone">
              <div className="wi">
                <a href="https://yadharthbagit.netlify.app/" target="_blank">
                  <img
                    src="./images/bagit.png"
                    class="imgs"
                    title="Ecommerce"
                  />
                </a>
              </div>
              <div className="wt">BagIT-Ecommerce</div>
            </div>
            <div className="dataone">
              <div className="wi">
                <a href="https://yadharthwebscrap.netlify.app/" target="_blank">
                  <img
                    src="./images/scrap.png"
                    class="imgs"
                    title="Scrapping"
                  />
                </a>
              </div>
              <div className="wt">Web-Scrap</div>
            </div>
            <div className="dataone">
              <div className="wi">
                <a
                  href="https://yadharthcatsaxios.netlify.app/"
                  target="_blank"
                >
                  <img src="./images/cat.png" class="imgs" title="CatsAPI" />
                </a>
              </div>
              <div className="wt">Cats_API</div>
            </div>
            <div className="dataone">
              <div className="wi">
                <a href="https://yadharthcrud.netlify.app/" target="_blank">
                  <img
                    src="./images/crud.png"
                    class="imgs"
                    title="Basic CRUD operation"
                  />
                </a>
              </div>
              <div className="wt">CRUD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
