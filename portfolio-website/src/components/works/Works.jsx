import React, { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "assets/globe.webp",
      title: "Web Design",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      img: "https://d334lak5lb2pjo.cloudfront.net/wp-content/uploads/b2b-web-design-examples-min.jpg",
    },
    {
      id: "2",
      icon: "assets/mobile.png",
      title: "Mobile Application",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      img: "",
    },
    {
      id: "3",
      icon: "assets/writing.png",
      title: "Branding",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      img: "",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) //left
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0); //right
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/256146490/original/7eec3ce339aec666e2c555c219a680390ec38303/be-your-mern-full-stack-developer.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
