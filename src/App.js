import "./App.css";
import PIC from "./Assets/pic.png";
import Quiz from "./components/Quiz";
function App() {
  return (
    <>
      <div className="App">
        <header>
          <h1 id="iqlipse">
            &lt;<span id="logo">iQlipse</span>/&gt;
          </h1>
          <div className="items">
            <p className="item">&lt;Start/&gt;</p>
            <p className="item">&lt;Work/&gt;</p>
            <p className="item">&lt;About/&gt;</p>
            <p className="item">&lt;Contact/&gt;</p>
          </div>
        </header>
        <div id="info">
          <h1>
            Hi,My name is <span id="name">Deepak Kumar</span>
          </h1>
          <h1>
            I <span id="design">design</span> and{" "}
            <span id="develop">develop</span> things
          </h1>
        </div>
        <div id="display">
          <img src={PIC} alt="iQlipse's Pic" />
        </div>
      </div>
      <Quiz />
    </>
  );
}

export default App;
