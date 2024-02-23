import React from "react";
import "./contact.css";

import sidentifier from "../../images/sidentifier.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="form">
        <h1 className="dm-sans-bold">Get An Acces ?</h1>
        <form action="#" method="POST">
          <div className="input">
            <h5 className="poppins-medium">Name</h5>
            <div className="row">
              <i class="fi fi-br-user"></i>
              <input
                className="poppins-light"
                type="text"
                name="text"
                id="text"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="input">
            <h5 className="poppins-medium">E-mail</h5>
            <div className="row">
              <i class="fi fi-br-envelope"></i>
              <input
                className="poppins-light"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="input">
            <h5 className="poppins-medium">Phone</h5>
            <div className="row">
              <i class="fi fi-br-phone-call"></i>
              <input
                className="poppins-light"
                type="number"
                name="phone"
                id="phone"
                placeholder="+123"
              />
            </div>
          </div>
          <div className="button">
            <button type="submit" className="poppins-medium">
              Get Free Quote
            </button>
          </div>
        </form>
      </div>
      <div className="img">
        <img src={sidentifier} alt="Contact" />
      </div>
    </div>
  );
};

export default Contact;
