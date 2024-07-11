import { useState, useRef } from "react";

export default function Player() {
  let playerName = useRef();
  const [enteredPlayerName, setEnterdPlayerName] = useState(null);
  function handleSubmit() {
    setEnterdPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
