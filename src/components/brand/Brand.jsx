import React from "react";
import "./brand.css";

const Brand = () => {
  return (
    <div className="brand">
      <div className="blur"></div>
      <div className="branding">
        <h1 className="dm-sans-bold">
          Let's Grow Your Brand To The Next Level
        </h1>
        <h4 className="poppins-regular">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio
          at minima, porro explicabo excepturi. Vero, quis quae. Neque nostrum
          distinctio autem veritatis facilis hic! Praesentium, quidem
          laudantium! A, modi.
        </h4>
        <div className="start">
          <a href="#">
            <span className="poppins-regular">
              Get Started <i class="fi fi-br-arrow-small-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brand;
