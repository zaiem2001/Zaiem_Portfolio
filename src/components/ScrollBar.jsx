import React from "react";

import "./scrollBar.css";

const ScrollBar = () => {
  return (
    <div className="scrollbar">
      <a href="#home">
        <div className="container">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
        <span className="text">Scroll UP</span>
      </a>
    </div>
  );
};

export default ScrollBar;
