import "../../App.css";

function TimerControls({ onTimerStart, onTimerReset }) {
  return (
    <div>
      <button id="start_stop" onClick={onTimerStart}>
        <i className="fa fa-play" aria-hidden="true"></i>
        <i class="fa fa-pause" aria-hidden="true"></i>
      </button>
      <button id="reset" onClick={onTimerReset}>
        <i className="fa fa-refresh" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default TimerControls;
