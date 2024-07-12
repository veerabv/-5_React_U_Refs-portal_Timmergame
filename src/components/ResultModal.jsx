import React , {forwardRef, useImperativeHandle, useRef} from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime },ref)  {
  const dialog = useRef();
  useImperativeHandle(ref , () => {     //this hook is used to pass our method to the ref which is in Timerchallenge.jsx
    return {
      open(){
          dialog.current.showModal(); // this is built in method for to open dialog
      }
    }
  })
  return (
    <dialog ref={dialog} className="result-modal">
      {/* <dialog className="result-model" open>  */}
      {/* the open attribute opens the model but there will be no dim background*/}
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>.
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
