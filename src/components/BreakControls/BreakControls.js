import '../../App.css';

function BreakControls({breakLength, sessionLength, onIncrementBreak, onDecrementBreak, sessionLengthSetter, timerRunning, timerMinutesSetter}) {
    function incrementSessionLength() {
        if (!timerRunning) {
          if (sessionLength === "60") {
            sessionLengthSetter("60");
          } else {
            sessionLengthSetter((Number(sessionLength) + 1).toString());
            timerMinutesSetter((Number(sessionLength) + 1));
          }
        }
    }
      function decrementSessionLength() {
        if (!timerRunning) {
          if (sessionLength === "1") {
            sessionLengthSetter("1");
          } else {
            sessionLengthSetter((Number(sessionLength) - 1).toString());
            timerMinutesSetter((Number(sessionLength) - 1));
          }
        }
    }
    return (
        <div className='break-controls'>
            <div className="length-time-descriptor" id='break-label'>Break Length
                <button className='break-decrement' id='break-decrement' onClick={onDecrementBreak}>
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </button>
                <div id='break-length' className='length-time-counter'>{breakLength}</div>
                <button className='break-increment' id='break-increment' onClick={onIncrementBreak}>
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </button>
            </div>
            <div className="length-time-descriptor" id='session-label'>Session Length
                <button className='session-decrement' id='session-decrement' onClick={decrementSessionLength}>
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </button>
                <div id='session-length' className='length-time-counter'>{sessionLength}</div>
                <button className='session-increment' id='session-increment' onClick={incrementSessionLength}>
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
}
  
export default BreakControls;