import React from "react";
import Navbar from "../navigationBar/Navbar";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="aboutus-div">
        <h1>About Us</h1>
        <p>Proiect pentru Aplicatii Web.</p>
        <p> E cam foarte schiop, iertati-l.</p>
        <p>Meet our team:</p>
        <ul>
          <li>Toma Ovidiu Andrei</li>
          <br />
          <li>Porojan Daniel</li>
          <br />
          <li>Gujan Nicoleta</li>
          <br />
          <li>Museteanu Corneliu</li>
        </ul>
      </div>
    </>
  );
};

export default AboutUs;
