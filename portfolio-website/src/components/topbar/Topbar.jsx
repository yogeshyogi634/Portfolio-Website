import React from "react";
import "./topbar.scss";
// import { Person, Mail } from "@material-ui/icons";
import { IoIosContact } from "react-icons/io";
import { MdMail } from "react-icons/md";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            bharat.
          </a>
          <div className="itemContainer">
            <IoIosContact className="icon" />
            <span>+91-8105679369</span>
          </div>
          <div className="itemContainer">
            <MdMail />
            <span>yogeshyogi634@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="lien2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
