import React from "react";
import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/coder-3462385-2896007.png"
            alt="man"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div>
            <marquee>
              <h4>
                Data Structures & Algorithms - <span>JavaScript</span> -
                <span>ReactJs</span> - <span>NodeJs</span> - <span>HTML</span> -
                <span>CSS</span> - <span>ExpressJs</span> - <span>GitHub</span>{" "}
                - <span>MongoDB</span> - <span>Python</span>
              </h4>
            </marquee>
          </div>
          <h2>Hi There, I'm</h2>
          <h1>Yogesh K U</h1>
          <h3>Full Stack Developer</h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
}
