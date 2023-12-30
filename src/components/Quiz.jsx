import React from "react";
import "../App.css";
const Quiz = () => {
  return (
    <div>
      <div className="iframe-container">
        <iframe
          src="https://rizzquiz.vercel.app/"
          title="Embedded Content"
          frameBorder="2"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Quiz;
