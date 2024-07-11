import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <TimerChallenge title="Easy" targetTime={1} />
      <TimerChallenge title="Not Easy" targetTime={5} />
      <TimerChallenge title="Getting Started" targetTime={10} />
      <TimerChallenge title="Pros Only" targetTime={15} />
      <div id="challenges"></div>
    </>
  );
}

export default App;
