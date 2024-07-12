import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";
// let timer;
const TimerChallenge = ({ title, targetTime }) => {
  const [timeExpired, setTimeExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  //   let timer;
  const timer = useRef();
  const modal = useRef();
  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      modal.current.showModal(); // this is built in method for to open dialog
    }, targetTime * 1000);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      {/* {timeExpired && <ResultModal  result="Lost" targetTime={targetTime} />} */}
      <ResultModal ref={modal} result="Lost" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
     
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
    </>
  );
};

export default TimerChallenge;
