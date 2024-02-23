import React from "react";
import "./brand.css";

const Brand = () => {
  return (
    <div className="brand">
      <div className="blur"></div>
      <div className="branding">
        <h1 className="dm-sans-bold">Digital Agency</h1>
        <h4 className="poppins-regular">
          Websites, mobile applications, UX / UI design, logo and branding,
          social media marketing.
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
