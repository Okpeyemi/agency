import React from "react";
import "./works.css";

import work from "../../images/work.png";

const Works = () => {
  return (
    <div className="works">
      <div className="img">
        <img src={work} alt="OurWork" />
      </div>
      <div className="text">
        <h4 className="poppins-regular">WebSite</h4>
        <h4 className="poppins-bold">24TKT</h4>
      </div>
    </div>
  );
};

export default Works;
