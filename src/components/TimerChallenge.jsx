import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";
// let timer;
const TimerChallenge = ({ title, targetTime }) => {
  const [timeRemainig, setTimeRemaining] = useState(targetTime * 1000);
  //   let timer;
  const timer = useRef();
  const modal = useRef();
  const isTimmerActive = timeRemainig > 0 && timeRemainig < targetTime * 1000;

  if (timeRemainig <= 0) {
    clearInterval(timer.current);

    modal.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    // setTimerStarted(true);
    timer.current = setInterval(() => {
      setTimeRemaining((previousTime) => previousTime - 10);
    }, 10);
  }
  function handleStop() {
    clearInterval(timer.current);
    modal.current.open();
  }
  return (
    <>
      {/* {timeExpired && <ResultModal  result="Lost" targetTime={targetTime} />} */}
      <ResultModal
        ref={modal}
        targetTime={targetTime}
        timeRemainig={timeRemainig}
        handleReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={isTimmerActive ? handleStop : handleStart}>
            {isTimmerActive ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p>
          <button>
            {isTimmerActive ? "Timer is Running ..." : "Timer Inactive"}{" "}
          </button>
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
