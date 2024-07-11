import React from "react";

const TimerChallenge = ({ title, targetTime }) => {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>start challenge</button>
      </p>
      <p>
        <button>Timer is Running ... / Timer Inactive</button>
      </p>
    </section>
  );
};

export default TimerChallenge;
