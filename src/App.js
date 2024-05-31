import React, { useState, useEffect } from "react";
import "./App.css";
import PIC from "./Assets/kkk.jpg";
import Work from "./components/Work";
import Header from "./components/Header";
import TimeLine from "./components/TimeLine";
import Footer from "./components/Footer";
import Bubble from "./components/Bubble";
import { Tech } from "./components/Tech";
import rizzquiz from "./Assets/rizzquiz.png";
import acasync from "./Assets/acasync.png";
import whisper from "./Assets/whisper.mp4";
function App() {
  const [txtIndex, setTxtIndex] = useState(0);
  const [txt, setTxt] = useState(["things", "webSites", "webApps", "ideas"]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTxtIndex((prevIndex) => (prevIndex + 1) % txt.length);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [txtIndex, txt]);

  return (
    <>
      <Header />
      <Bubble top="-20%" />
      <div className="App">
        <div id="display">
          <div id="outer" className="omega">
            <img src={PIC} alt="iQlipse's Pic" />
          </div>
          <span id="outer"></span>
        </div>
        <div id="info">
          <h2>
            Hi, My name is <span id="name">Deepak Kumar</span>
          </h2>
          <h2>
            I <span id="design">design</span> and{" "}
            <span id="develop">develop</span>{" "}
            <span id="demo" className="typewriter">
              {txt[txtIndex] + "..."}
            </span>
          </h2>
        </div>
      </div>

      {/* timeline */}
      <div>
        <div>
          <TimeLine />
        </div>
        <Tech />
        <div className="checkpoints" id = "work-back">
          <h1 id="work">
            <Bubble top="200%" />
            <em>Work</em>
          </h1>
          {/* <LeetCode /> */}
          <a href="https://acasync.vercel.app/">
            <Work src={acasync} />
          </a>
          <a href="https://whisper-and-hush.vercel.app/">
            <Work src={whisper} />
          </a>
          <a href="https://rizzquiz.vercel.app/">
            <Work src={rizzquiz} />
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
