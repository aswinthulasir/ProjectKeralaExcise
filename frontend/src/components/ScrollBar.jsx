import React from "react";

const ScrollingTextBar = () => {
  return (
    <div className="scrolling-container">
      <div className="scrolling-text">
        <span className="scrolling-item">Lorem ipsum dolor sit amet</span>
        <span className="bullet">•</span>
        <span className="scrolling-item">Consectetur adipiscing elit</span>
        <span className="bullet">•</span>
        <span className="scrolling-item">Sed do eiusmod tempor incididunt</span>
      </div>
    </div>
  );
};

export default ScrollingTextBar;
