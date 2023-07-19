import "../../App.css";

function BreakControls({
  breakLength,
  sessionLength,
  breakLengthSetter,
  sessionLengthSetter,
  timerRunning,
  timerMinutesSetter,
}) {
  function incrementSessionLength() {
    if (!timerRunning) {
      if (sessionLength === "60") {
        sessionLengthSetter("60");
      } else {
        sessionLengthSetter((Number(sessionLength) + 1).toString());
        timerMinutesSetter(Number(sessionLength) + 1);
      }
    }
  }
  function decrementSessionLength() {
    if (!timerRunning) {
      if (sessionLength === "1") {
        sessionLengthSetter("1");
      } else {
        sessionLengthSetter((Number(sessionLength) - 1).toString());
        timerMinutesSetter(Number(sessionLength) - 1);
      }
    }
  }
  function incrementBreakLength() {
    if (!timerRunning) {
      if (breakLength === "60") {
        breakLengthSetter("60");
      } else {
        breakLengthSetter((Number(breakLength) + 1).toString());
      }
    }
  }
  function decrementBreakLength() {
    if (!timerRunning) {
      if (breakLength === "1") {
        breakLengthSetter("1");
      } else {
        breakLengthSetter((Number(breakLength) - 1).toString());
      }
    }
  }
  return (
    <div className="break-controls">
      <div className="length-time-descriptor" id="break-label">
        Break Length
        <button
          className="modify-time-left-button"
          id="break-decrement"
          onClick={decrementBreakLength}
        >
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </button>
        <div id="break-length" className="length-time-counter">
          {breakLength}
        </div>
        <button
          className="modify-time-right-button"
          id="break-increment"
          onClick={incrementBreakLength}
        >
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
      </div>
      <div className="length-time-descriptor" id="session-label">
        Session Length
        <button
          className="modify-time-left-button"
          id="session-decrement"
          onClick={decrementSessionLength}
        >
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </button>
        <div id="session-length" className="length-time-counter">
          {sessionLength}
        </div>
        <button
          className="modify-time-right-button"
          id="session-increment"
          onClick={incrementSessionLength}
        >
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default BreakControls;
