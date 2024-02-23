import React from "react";
import "./work.css";

import { Works } from "../../components";

const Work = () => {
  return (
    <div className="work">
      <h1 className="dm-sans-bold">Our Work</h1>
      <div className="worker">
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
      </div>
    </div>
  );
};

export default Work;
