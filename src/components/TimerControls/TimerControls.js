import '../../App.css';

function TimerControls({onTimerStart, onTimerReset}) {
    return (
        <div>TimerControls
            <button id='start_stop' onClick={onTimerStart}>start_stop</button>
            <button id='reset' onClick={onTimerReset}>reset</button>
        </div>
    );
}
  
export default TimerControls;