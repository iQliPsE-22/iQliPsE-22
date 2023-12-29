import React from "react";
import "../App.css";
const Header = () => {
  return (
    <div>
      <header>
        <h1 id="iqlipse">
          &lt;<span id="logo">iQlipse</span>/&gt;
        </h1>
        <div className="items">
          <p className="item">
            <a href="#work">&lt;Start/&gt;</a>
          </p>
          <p className="item">&lt;Work/&gt;</p>
          <p className="item">&lt;About/&gt;</p>
          <p className="item">&lt;Contact/&gt;</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
