import "./App.css";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Last() {
  return (
    <div>
      <div className="develop">
        <div className="connect">
          <div className="connectitems">
            <div>
              <a
                href="mailto:ganeshyadharth@gmail.com"
                target="_blank"
                title="ganeshyadharth@gmail.com"
              >
                <EmailIcon id="xa" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/yadharth/"
                target="_blank"
                title="https://www.linkedin.com/in/yadharth/"
              >
                <LinkedInIcon id="xb" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/YadharthGC"
                target="_blank"
                title="https://github.com/YadharthGC"
              >
                <GitHubIcon id="xc" />
              </a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "0.5%" }}>
          Designed and Developed by Hari Yadharth GC
        </div>
      </div>
    </div>
  );
}

export default Last;
