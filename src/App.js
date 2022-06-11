import { React, useState } from "react";
import { SteppedLineTo } from "react-lineto";
import "./App.css";

function App() {
  const [clickedBoxes, setClickedBoxes] = useState([]);
  const [connect, setConnect] = useState(false);
  const [connections, setConnections] = useState([]);

  function clicked(e) {
    var target = e.target;
    console.log(target.id);
    target.style.backgroundColor = "gray";
    setClickedBoxes((state) => [...state, target.id]);
  }

  const a = "one";
  const b = "two";
  const c = "four";
  const d = "three";

  function reset() {
    setConnect(false);
  }

  function handleConnect() {
    let clickedConnections = [];
    for (let i = 1; i < clickedBoxes.length; i++) {
      let point = { from: clickedBoxes[i - 1], to: clickedBoxes[i] };
      clickedConnections.push(point);
    }
    setConnections(clickedConnections);
    setConnect(true);
  }

  return (
    <div>
      <div className="buttons">
        <button type="button" onClick={handleConnect}>
          connect
        </button>
        <button>reset</button>
      </div>
      <div className="wrapper">
        <div className="one" id="one" onClick={clicked}>
          1
        </div>
        <div className="two" id="two" onClick={clicked}>
          2
        </div>
        <div className="three" id="three" onClick={clicked}>
          3
        </div>
        <div className="four" id="four" onClick={clicked}>
          4
        </div>
        {connections.map((connection, i) =>
          connect === true ? (
            <SteppedLineTo
              from={connection.from}
              to={connection.to}
              borderColor="black"
            ></SteppedLineTo>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default App;
