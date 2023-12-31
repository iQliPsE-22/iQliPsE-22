import React from "react";
import "./Timeline.css";
import cgc from "../Assets/cgc.jpg";
import hca from "../Assets/hca.jpg";
const TimeLine = () => {
  return (
    <div className="checkpoints" id = "timeline">
      <h1>
        <em>Timeline</em>
      </h1>
      <div>
        <div className="dots">
          <hr />
          <div className="dot" id="current"></div>
          <h2>2025</h2>
          <img src={cgc} alt="graduation" />
          <div className="dot"></div>
          <h2>2021</h2>
          <img src={hca} alt="graduation" />
          <div className="dot"></div>
          <h2>Journey</h2>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
