import React from "react";
import "../App.css";
import resumePDF from "../Assets/resume.pdf";

const Header = () => {
  const scrollToWork = () => {
    const workElement = document.getElementById("work");
    if (workElement) {
      workElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToEducation = () => {
    const educationElement = document.getElementById("timeline");
    if (educationElement) {
      educationElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div>
      <h1 id="iqlipse-res">
        &lt;<span id="logo">iQlipse</span>/&gt;
      </h1>
      <header>
        <h1 id="iqlipse">
          &lt;<span id="logo">iQlipse</span>/&gt;
        </h1>
        <div className="items">
          <p className="item">&lt;Start/&gt;</p>
          <p className="item" onClick={scrollToWork}>
            &lt;Work/&gt;
          </p>
          <p className="item" onClick={scrollToEducation}>
            &lt;Education/&gt;
          </p>
          <p className="item" onClick={downloadResume}>
            &lt;Resume/&gt;
          </p>
          <p className="item">&lt;Contact/&gt;</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
