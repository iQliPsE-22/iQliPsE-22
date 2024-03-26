import React from "react";
import { Tilt } from "react-tilt";
import "./work.css";
const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Work = (props) => {
  const { src } = props;
  const isImage = /\.(jpeg|jpg|gif|png)$/i.test(src);
  const isVideo = /\.(mp4|mov|avi|mkv)$/i.test(src);

  return (
    <div className="work-container">
      <Tilt className="Tilt" options={defaultOptions}>
        <div className="work">
          {isImage ? (
            <img src={src} alt="work" />
          ) : isVideo ? (
            <video src={src} onMouseOver={e => e.target.play()} onMouseOut={e => e.target.pause()} />
          ) : (
            <p>Unsupported file format</p>
          )}
        </div>
      </Tilt>
    </div>
  );
};

export default Work;
