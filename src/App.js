import React, { useState, useEffect } from "react";
import "./App.css";
import PIC from "./Assets/pic.png";
import Quiz from "./components/Quiz";
import Header from "./components/Header";
import TimeLine from "./components/TimeLine";
import Footer from "./components/Footer";
import LeetCode from "./components/LeetCode";
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
        <TimeLine />
      </div>
      <div className="checkpoints">
        <h1>
          <em>Tech Stack</em>
        </h1>
        <div id="tech">
          <section>
            <h3>Languages</h3>
            <ul>
              <li>C</li>
              <li>C++</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
            </ul>
          </section>
          <section>
            <h3>Tools</h3>
            <ul>
              <li>Figma</li>
              <li>Git</li>
              <li>Npm</li>
            </ul>
          </section>
          <section>
            <h3>Frameworks</h3>
            <ul>
              <li>ReactJs</li>
              <li>ChartJs</li>
            </ul>
          </section>
          <section>
            <h3>Libraries</h3>
            <ul>
              <li>Bootstrap</li>
              <li>Material UI</li>
            </ul>
          </section>
          <section>
            <h3>Learning</h3>
            <ul>
              <li>MongoDb</li>
              <li>Express.Js</li>
              <li>Node.Js</li>
              <li>React.Js</li>
            </ul>
          </section>
        </div>
      </div>

      {/* work */}
      <div className="checkpoints">
        <h1 id="work">
          <em>Work</em>
        </h1>
        <LeetCode />
        <Quiz />
      </div>
      <Footer />
    </>
  );
}

export default App;
