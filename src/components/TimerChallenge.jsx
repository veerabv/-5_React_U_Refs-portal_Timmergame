import React, { useState, useRef } from "react";
// let timer;
const TimerChallenge = ({ title, targetTime }) => {
  const [timeExpired, setTimeExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  //   let timer;
  const timer = useRef();
  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      {timeExpired && <p>You lost!!</p>}
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} challenge
        </button>
      </p>
      <p>
        <button>
          {timerStarted ? "Timer is Running ..." : "Timer Inactive"}{" "}
        </button>
      </p>
    </section>
  );
};

export default TimerChallenge;
