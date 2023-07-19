import '../../App.css';
import { useEffect, useState } from 'react';

function Timer({minutes, seconds}) {
    /* const [timerMinutes, setTimerMinutes] = useState(minutes);
    const [timerSeconds, setTimerSeconds] = useState(seconds); */
    const [sessionState, setSessionState] = useState("Session");
    useEffect(() => {
        //setTimerMinutes(minutes);
        //setTimerSeconds(seconds);
        if (minutes === 0 && seconds === 0) {
            setSessionState("Break");
        } else {
            setSessionState("Session");
        }
      }, [minutes,seconds]);
    return (
        <div id='timer-label'>{sessionState}
            <div id='time-left'>{minutes < 10? minutes.toString().padStart(2, '0'): minutes}:{seconds < 10? seconds.toString().padStart(2, '0'): seconds}</div>
        </div>
    );
}
  
export default Timer;