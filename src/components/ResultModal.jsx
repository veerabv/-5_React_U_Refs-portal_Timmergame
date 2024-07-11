import React from "react";

const ResultModal = ({ result, targetTime }) => {
  return (
    <dialog className="result-model" open>
      {/* <dialog className="result-model" open>  */}{" "}
      {/* the open attribute opens the model but there will be no dim background*/}
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>.
      </p>
      <p>
        You stopped the timer <strong>X seconds ago</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
