import React, { useState, useEffect } from "react";
import "./App.css";
import PIC from "./Assets/pic.png";
import Quiz from "./components/Quiz";
import Header from "./components/Header";

function App() {
  const [txtIndex, setTxtIndex] = useState(0);
  const [txt, setTxt] = useState(["things", "webSites", "webApps","ideas"]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTxtIndex((prevIndex) => (prevIndex + 1) % txt.length);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [txtIndex, txt]);

  return (
    <>
      <div className="App">
        <Header />
        <div id="info">
          <h2>
            Hi, My name is <span id="name">Deepak Kumar</span>
          </h2>
          <h2>
            I <span id="design">design</span> and{" "}
            <span id="develop">develop</span>{" "}
            <span id="demo" className="typewriter">
              {txt[txtIndex]}
            </span>
          </h2>
        </div>
        <div id="display">
          <img src={PIC} alt="iQlipse's Pic" />
        </div>
      </div>
      <div id="work">
        <Quiz />
      </div>
    </>
  );
}

export default App;
