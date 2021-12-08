import "./App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import * as React from "react";
import Typical from "react-typical";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

function About() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElc, setAnchorElc] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  ////////////////////////////////////////
  const [anchorEla, setAnchorEla] = React.useState(null);
  const handlePopoverOpena = (eventa) => {
    setAnchorEla(eventa.currentTarget);
  };
  const handlePopoverClosea = () => {
    setAnchorEla(null);
  };
  const opena = Boolean(anchorEla);
  ////////////////////////////////////////
  const [anchorElb, setAnchorElb] = React.useState(null);
  const handlePopoverOpenb = (eventb) => {
    setAnchorElb(eventb.currentTarget);
  };
  const handlePopoverCloseb = () => {
    setAnchorElb(null);
  };
  const openb = Boolean(anchorElb);

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
                    <span className="y" style={{ color: "black" }}>
                      Skills
                    </span>
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
              <u>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front-end Developer",
                    1000,
                    "Back-end Developer",
                    1000,
                    "Full-stack Developer",
                    1000,
                    "Web Developer",
                    1000,
                  ]}
                />
              </u>
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
                  <div
                    id="carouselExampleSlidesOnly"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="./images/y1.jpg"
                          alt="..."
                          className="hariimg"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="./images/y2.jpg"
                          alt="..."
                          className="hariimg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="./images/y3.jpg"
                          alt="..."
                          className="hariimg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="./images/y4.jpg"
                          alt="..."
                          className="hariimg"
                        />
                      </div>
                    </div>
                  </div>
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
                      <LinkedInIcon id="in" style={{ marginLeft: "2%" }} />
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
                  href="https://drive.google.com/file/d/1mMNFJDNwKP-A7TBdP-xnCE7tLxo5_nHM/view"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <button className="resume">
                    <span className="main">
                      Resume
                      <lord-icon
                        src="https://cdn.lordicon.com/puvaffet.json"
                        trigger="loop"
                        colors="primary:#121331,secondary:#08a88a"
                        id="ball"
                      ></lord-icon>
                      &#8594;
                    </span>
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
          <div className="data" id="sk">
            <div className="dataone" id="sks">
              <div className="wd">
                <span className="main">Web Design</span>
              </div>
              <div className="wi">
                <lord-icon
                  src="https://cdn.lordicon.com/isvvzjbf.json"
                  trigger="loop"
                  colors="primary:#121331,secondary:#08a88a"
                  className="apple"
                  id="csicon"
                ></lord-icon>
              </div>
              <div className="wt">
                Web design is the process of creating websites. It encompasses
                several different aspects, including webpage layout, content
                production and graphic design
              </div>
            </div>
            <div className="dataone" id="sks">
              <div className="wd">
                <span className="main">Web Development</span>
              </div>
              <div className="wi">
                <lord-icon
                  src="https://cdn.lordicon.com/nxaaasqe.json"
                  trigger="loop"
                  colors="primary:#121331,secondary:#08a88a"
                  className="apple"
                  id="cdicon"
                ></lord-icon>
              </div>
              <div className="wt">
                Web development refers to building, creating websites. It
                includes aspects such as web design, web publishing, web
                programming and database management.
              </div>
            </div>
            <div className="dataone" id="sks">
              <div className="wd">
                <span className="main">Responsive Design</span>
              </div>
              <div className="wi">
                <lord-icon
                  src="https://cdn.lordicon.com/qhgmphtg.json"
                  trigger="loop"
                  delay="2"
                  colors="primary:#121331,secondary:#08a88a"
                  className="apple"
                  id="paicon"
                ></lord-icon>
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
            <div className="dataone" id="ole">
              <div className="wi">
                <a href="https://yadharthobito.netlify.app/" target="_blank">
                  <img
                    src="./images/service.png"
                    class="imgs"
                    title="online service booking"
                  />
                </a>
              </div>
              <div className="wt">Online service booking</div>
              <div className="gf">
                <div>
                  <a
                    href="https://github.com/YadharthGC/obito"
                    target="_blank"
                    title="Front-end"
                  >
                    <GitHubIcon id="oi" />
                  </a>
                  <a
                    href="https://github.com/YadharthGC/capstonenode"
                    target="_blank"
                    title="Back-end"
                  >
                    <GitHubIcon id="oi" />
                  </a>
                </div>
                <div>
                  <Typography
                    aria-owns={opena ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpena}
                    onMouseLeave={handlePopoverClosea}
                  >
                    <MoreHorizIcon />
                  </Typography>
                  <Popover
                    data-target="#ta"
                    id="mouse-over-popover"
                    sx={{
                      pointerEvents: "none",
                    }}
                    open={opena}
                    anchorEl={anchorEla}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    onClose={handlePopoverClosea}
                    disableRestoreFocus
                  >
                    <Typography id="ta">
                      <div className="main">Library</div>
                      <div className="skilla" id="cat">
                        <div className="skill">Reactjs</div>
                        <div className="skill">Nodejs</div>
                      </div>

                      <div className="main">NPMs</div>
                      <div className="skilla" style={{ width: "100%" }}>
                        <div className="skill">Axios</div>
                        <div className="skill">Express</div>
                        <div className="skill">Cors</div>
                        <div className="skill">Bcrypt</div>
                        <div className="skill">JSONwebToken</div>
                        <div className="skill">MongoDB</div>
                      </div>
                    </Typography>
                  </Popover>
                </div>
              </div>
            </div>
            <div className="dataone" id="ole">
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
              <div className="gf">
                <div>
                  <a
                    href="https://github.com/YadharthGC/ecommerce"
                    target="_blank"
                    title="Front-end"
                  >
                    <GitHubIcon id="oi" />
                  </a>
                  <a
                    href="https://github.com/YadharthGC/ecommerce_node"
                    target="_blank"
                    title="Back-end"
                  >
                    <GitHubIcon id="oi" />
                  </a>
                </div>
                <div>
                  <Typography
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                  >
                    <MoreHorizIcon />
                  </Typography>
                  <Popover
                    data-target="#tb"
                    id="mouse-over-popover"
                    sx={{
                      pointerEvents: "none",
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Typography id="tb">
                      <div className="main">Library</div>
                      <div className="skilla" id="cat">
                        <div className="skill">Reactjs</div>
                        <div className="skill">Nodejs</div>
                      </div>

                      <div className="main">NPMs</div>
                      <div className="skilla" style={{ width: "100%" }}>
                        <div className="skill">Razorpay</div>
                        <div className="skill">Axios</div>
                        <div className="skill">Express</div>
                        <div className="skill">Cors</div>
                        <div className="skill">Bcrypt</div>
                        <div className="skill">JSONwebToken</div>
                        <div className="skill">MongoDB</div>
                      </div>
                    </Typography>
                  </Popover>
                </div>
              </div>
            </div>
            <div className="dataone" id="ole">
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
              <div className="gf">
                <div>
                  <a
                    href="https://github.com/YadharthGC/webscrap"
                    target="_blank"
                    title="Front-end"
                  >
                    <GitHubIcon id="oi" />
                  </a>
                  <a
                    href="https://github.com/YadharthGC/flipkartscrap"
                    target="_blank"
                    title="Back-end"
                  >
                    <GitHubIcon id="oi" />
                  </a>
                </div>
                <div>
                  <Typography
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpenb}
                    onMouseLeave={handlePopoverCloseb}
                  >
                    <MoreHorizIcon />
                  </Typography>
                  <Popover
                    id="mouse-over-popover"
                    sx={{
                      pointerEvents: "none",
                    }}
                    open={openb}
                    anchorEl={anchorElb}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    onClose={handlePopoverCloseb}
                    disableRestoreFocus
                  >
                    <Typography id="ta">
                      <div className="main">Library</div>
                      <div className="skilla" id="cat">
                        <div className="skill">Reactjs</div>
                        <div className="skill">Nodejs</div>
                      </div>

                      <div className="main">NPMs</div>
                      <div className="skilla" style={{ width: "100%" }}>
                        <div className="skill">Puppeteer</div>
                        <div className="skill">Axios</div>
                        <div className="skill">Express</div>
                        <div className="skill">Cors</div>
                        <div className="skill">MongoDB</div>
                      </div>
                    </Typography>
                  </Popover>
                  {/* <MoreHorizIcon /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
