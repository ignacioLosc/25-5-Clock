import '../../App.css';
//import { useEffect, useState } from 'react';

function Timer({minutes, seconds}) {
    /* const [timerMinutes, setTimerMinutes] = useState(minutes);
    const [timerSeconds, setTimerSeconds] = useState(seconds);
    useEffect(() => {
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }, [minutes,seconds]); */
    return (
        <div id='timer-label'>Session
            <div id='time-left'>{minutes}:{seconds < 10? seconds.toString().padStart(2, '0'): seconds}</div>
        </div>
    );
}
  
export default Timer;