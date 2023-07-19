import "../../App.css";

function TimerControls({ onTimerStart, onTimerReset }) {
  return (
    <div>
      <button
        id="start_stop"
        className="control-time-button"
        onClick={onTimerStart}
      >
        <i className="fa fa-play" aria-hidden="true"></i>
        <i class="fa fa-pause" aria-hidden="true"></i>
      </button>
      <button id="reset" className="control-time-button" onClick={onTimerReset}>
        <i className="fa fa-refresh" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default TimerControls;
