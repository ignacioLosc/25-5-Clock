import '../../App.css';

function BreakControls({breakLength, sessionLength, onChangeSession, onChangeBreak}) {
    return (
        <div className='break-controls'>
            <div className="length-time-descriptor" id='break-label'>Break Length
                <button className='break-decrement' id='break-decrement' onClick={onChangeBreak}>Decrement</button>
                <div id='break-length' className='length-time-counter'>{breakLength}</div>
                <button className='break-increment' id='break-increment' onClick={onChangeBreak}>Increment</button>
            </div>
            <div className="length-time-descriptor" id='session-label'>Session Length
                <button className='session-decrement' id='session-decrement' onClick={onChangeSession}>Decrement</button>
                <div id='session-length' className='length-time-counter'>{sessionLength}</div>
                <button className='session-increment' id='session-increment' onClick={onChangeSession}>Increment</button>
            </div>
        </div>
    );
}
  
export default BreakControls;