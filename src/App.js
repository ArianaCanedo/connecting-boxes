import { React, useState } from "react";
import Xarrow from "react-xarrows";
import "./App.css";

function App() {
  const [clickedBoxes, setClickedBoxes] = useState([]);
  const [connect, setConnect] = useState(false);
  const [connections, setConnections] = useState([]);

  function clicked(e) {
    const target = e.target;
    console.log(target.id);
    target.style.backgroundColor = "gray";
    setClickedBoxes((state) => [...state, target.id]);
  }

  function reset(e) {
    let connections = [];
    setConnections(connections);
    setClickedBoxes([]);
    setConnect(false);
  }

  function handleConnect() {
    let clickedConnections = [];
    for (let i = 1; i < clickedBoxes.length; i++) {
      let point = { start: clickedBoxes[i - 1], end: clickedBoxes[i] };
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
        <button type="button" onClick={reset}>
          reset
        </button>
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
            <Xarrow
              start={connection.start}
              end={connection.end}
              color="gray"
              path="grid"
              strokeWidth={1}
              showHead="false"
            ></Xarrow>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default App;
