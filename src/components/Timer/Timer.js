import "../../App.css";
import { useEffect, useState } from "react";

function Timer({ minutes, seconds, sessionRunning }) {
  /* const [timerMinutes, setTimerMinutes] = useState(minutes);
    const [timerSeconds, setTimerSeconds] = useState(seconds); */
  const [sessionState, setSessionState] = useState("Session");
  useEffect(() => {
    //setTimerMinutes(minutes);
    //setTimerSeconds(seconds);
    if (!sessionRunning) {
      setSessionState("Break");
    } else {
      setSessionState("Session");
    }
  }, [sessionRunning]);
  return (
    <div id="timer-label">
      {sessionState}
      <div id="time-left">
        {minutes < 10 ? minutes.toString().padStart(2, "0") : minutes}:
        {seconds < 10 ? seconds.toString().padStart(2, "0") : seconds}
      </div>
    </div>
  );
}

export default Timer;
