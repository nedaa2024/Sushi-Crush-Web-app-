// AboutUs.js
import React from "react";
import "./AboutUs.css";
import "./all.css";

function AboutUs() {
  return (
    <div className=" about-us">
      <div className="background">
        <img
          src="../imges/about2.png"
          alt="Chefs in kitchen"
          className="aboutImg"
        />
      </div>
      <div className="content">
        <h1>About Us</h1>
        <p className="tagline">We cook food better!</p>
        <p className="aboutText">
          Presentations are communication tools that can be used as
          demonstrations, lectures, speeches, reports, and more.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
