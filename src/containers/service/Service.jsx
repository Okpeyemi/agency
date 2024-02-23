import React from "react";
import "./service.css";

import { Services } from "../../components";

const Service = () => {
  return (
    <div className="service">
      <h1 className="dm-sans-bold serviceTitle">Services We Can Help With</h1>
      <div className="servicePart">
        <Services />
        <Services />
        <Services />
        <Services />
        <Services />
        <Services />
      </div>
    </div>
  );
};

export default Service;
