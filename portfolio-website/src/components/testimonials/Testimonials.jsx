import React from "react";
import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Sachin",
      title: "Cyber Security",
      img: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-jeans-clothes-fashion-man_158538-5030.jpg?w=2000",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribu sit amet consectetur adipisicing elit. Doloribu.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribu sit amet consectetur adipisicing elit. Doloribu",
    },
    {
      id: 2,
      name: "Dhanu",
      title: "Cloud Computing",
      img: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-jeans-clothes-fashion-man-posing_158538-4975.jpg",
      icon: "assets/youtube.webp",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribu sit amet consectetur adipisicing elit. Doloribu.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribu sit amet consectetur adipisicing elit. Doloribu",
      featured: true,
    },
    {
      id: 3,
      name: "Sharath",
      title: "CEO",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCTCRCRIkZSSx5OyG6VSNNqKc_gPY_khR-mFOvfMgm5Lqf5gAfSQN9rbCXmf-dJk-neg&usqp=CAU",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribu sit amet consectetur adipisicing elit. Doloribu.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribu sit amet consectetur adipisicing elit. Doloribu",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.svg" alt="" className="left" />
              <img src={d.img} alt="" className="user" />
              <img src={d.icon} alt="" className="right" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
