import React from "react";
import "./Bubble.css";

const Bubble = (props) => {
  const { top } = props;
  return <div id="bubble" className="bub" style={{ top: top }}></div>;
};

export default Bubble;
