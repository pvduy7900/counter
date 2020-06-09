import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// import Children from "./components/Children";

function App() {
  let count = useSelector((state) => state.count); // ???
  let dispatch = useDispatch();// ???
  let [color, setColor] = useState("")
  let textColor = "red"
  if (count > 3) {
    textColor = "green"
  }

  const increaseNum = () => {
    dispatch({ type: "Increment" }); // dispatch send action, and action is object
  }; // ????
  return (

    <div className="App">
      <h1> Counter App</h1>
      <h2>{count}</h2>

      <button onClick={() => increaseNum()}>Increment</button>
      <button
        onClick={() =>
          dispatch({
            type: "Decrement",
            payload: { num: 1, message: "bitna is amazing" },
          })
        }
      >
        Decrement
      </button>
      <button onClick={() => dispatch({
        type: "reset",
      })}> reset </button>

      <input type="text" onChange={(e) => setColor(e.target.value)}></input>
      <div>
        <div>
          {
            Array(count).fill(null).map(x => {
              console.log(x)
              return <div style={{ backgroundColor: color, color: textColor }} className="box">{color}</div>
            })
          }
        </div>
        
      </div>

    </div>



  );
}

export default App;