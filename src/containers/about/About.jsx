import React from "react";
import "./about.css";
import about from "../../images/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="img">
        <img src={about} alt="AboutUs" />
      </div>
      <div className="text">
        <h1 className="dm-sans-bold">About Us</h1>
        <p className="poppins-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, eius
          cum dolore beatae aspernatur veniam! Earum eaque quam quae nesciunt
          soluta tempore natus doloremque libero facere cumque voluptate, esse
          laudantium! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Omnis, eius cum dolore beatae aspernatur veniam! Earum eaque quam quae
          nesciunt soluta tempore natus doloremque libero facere cumque
          voluptate, esse laudantium! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Omnis, eius cum dolore beatae aspernatur veniam!
          Earum eaque quam quae nesciunt soluta tempore natus doloremque libero
          facere cumque voluptate, esse laudantium!
        </p>
      </div>
    </div>
  );
};

export default About;
