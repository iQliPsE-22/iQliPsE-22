import React from "react";
import "../App.css";
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

  return (
    <div>
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
          <p className="item">&lt;Contact/&gt;</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
