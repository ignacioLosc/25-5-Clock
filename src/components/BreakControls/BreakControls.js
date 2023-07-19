import '../../App.css';

function BreakControls({breakLength, sessionLength, onIncrementSession, onDecrementSession, onIncrementBreak, onDecrementBreak}) {
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
                <button className='session-decrement' id='session-decrement' onClick={onDecrementSession}>
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </button>
                <div id='session-length' className='length-time-counter'>{sessionLength}</div>
                <button className='session-increment' id='session-increment' onClick={onIncrementSession}>
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
}
  
export default BreakControls;