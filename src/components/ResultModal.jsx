import React , {forwardRef, useImperativeHandle, useRef} from "react";

const ResultModal = forwardRef(function ResultModal({ timeRemainig, targetTime,handleReset },ref)  {
  const dialog = useRef();
  useImperativeHandle(ref , () => {     //this hook is used to pass our method to the ref which is in Timerchallenge.jsx
    return {
      open(){
          dialog.current.showModal(); // this is built in method for to open dialog
      }
    }
  })

  const isLost = timeRemainig <= 0;
  const formatedTimeRemaining = (timeRemainig / 1000).toFixed(2);
  return (
    <dialog ref={dialog} className="result-modal">
      {/* <dialog className="result-model" open>  */}
      {/* the open attribute opens the model but there will be no dim background*/}
      {isLost && <h2>You Lost</h2>}
      
      <p>
        The target time was <strong>{targetTime} seconds</strong>.
      </p>
      <p>
        You stopped the timer with <strong>{formatedTimeRemaining} seconds left</strong>
      </p>
      <form method="dialog" onSubmit = {handleReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
