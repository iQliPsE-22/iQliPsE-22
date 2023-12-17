import React from "react";
import "../App.css";
const Quiz = () => {
  return (
    <div>
      {" "}
      <div className="iframe-container">
        <iframe
          src="https://rizzquiz.vercel.app/"
          title="Embedded Content"
          frameborder="2"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Quiz;
