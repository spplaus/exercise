import React, { useState } from "react";
import "./App.css";

function App(props) {
  const [selected, setSelected] = useState(0);

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * (props.anecdotes.length - 0)) + 0);
  };

  const handleVoteClick = () => {
    const votes = [];
    const copy = {
      ...votes,
    };
    console.log(copy);
  };

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <button onClick={handleClick}>nex story</button>
      <button onClick={handleVoteClick}>vote</button>
    </div>
  );
}

export default App;
