import { useEffect, useState, useRef } from 'react';
import './App.css';
import BreakControls from './components/BreakControls/BreakControls.js'
import Timer from './components/Timer/Timer.js'
import TimerControls from './components/TimerControls/TimerControls.js'
import { flushSync } from 'react-dom';

function App() {
  const [breakLength, setBreakLength] = useState("5");
  const [sessionLength, setSessionLength] = useState("25");
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [sessionRunning, setSessionRunning] = useState(true);
  const secondsReference = useRef();
  secondsReference.current = timerSeconds;
  const minutesReference = useRef();
  minutesReference.current = timerMinutes;
  const timerRunningReference = useRef();
  timerRunningReference.current = timerRunning;
  function modifySessionLength(event) {
    if (!timerRunning) {
      if (event.target.innerHTML === "Increment") {
        if (sessionLength === "60") {
          setSessionLength("60");
        } else {
          setSessionLength((Number(sessionLength) + 1).toString());
          setTimerMinutes((Number(sessionLength) + 1));
        }
      } else {
        if (sessionLength === "1") {
          setSessionLength("1");
        } else {
          setSessionLength((Number(sessionLength) - 1).toString());
          setTimerMinutes((Number(sessionLength) - 1));
        }
      }
    }
  }
  function modifyBreakLength(event) {
    if (!timerRunning) {
      if (event.target.innerHTML === "Increment") {
        if (breakLength === "60") {
          setBreakLength("60");
        } else {
          setBreakLength((Number(breakLength) + 1).toString());
        }
      } else {
        if (breakLength === "1") {
          setBreakLength("1");
        } else {
          setBreakLength((Number(breakLength) - 1).toString());
        }
      }
    }
  }
  async function startTimer() {
    if (!timerRunningReference.current) {
      //await sleep(1000);
      setTimerRunning(true);
    } else {
      setTimerRunning(false);
    }
  }
  function resetTimer() {
    //console.log("resetting timer");
    flushSync(() => {
      setTimerRunning(false);
    });
    //setTimerRunning(false);
    setTimerMinutes(25);
    setTimerSeconds(0);
    setSessionLength("25");
    setBreakLength("5");
    setSessionRunning(true);
    document.getElementById('beep').pause();
    document.getElementById('beep').load();
  }
  function switchCountdown() {
    console.log("switching countdown");
    document.getElementById('beep').play();
    if (sessionRunning) {
      //console.log("session finished, switching to break");
      //console.log("value of timerRunning: " + timerRunning);
      // sound alarm
      // begin break countdown
      setSessionRunning(false);
      setTimerMinutes(Number(breakLength));
      startTimer();
      
    } else {
      //console.log("break finished, switching to session");
      //console.log("value of timerRunning: " + timerRunning);
      setSessionRunning(true);
      setTimerMinutes(Number(sessionLength));
      startTimer();
    }
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function passTime() {
    //console.log("passing time");
    //console.log(timerRunning);
    //console.log("timerSeconds: " + secondsReference.current);
    await sleep(1000);
    if (!(minutesReference.current === 0 && secondsReference.current === 0)) {
      //console.log("passing time, time not over");
      //console.log("timerSeconds: " + timerSeconds);
      if (secondsReference.current !== 0 && timerRunningReference.current) {
        //console.log("Decreasing seconds to: " + (timerSeconds - 1).toString());
        setTimerSeconds(secondsReference.current - 1);
        //await sleep(1000);
        passTime();
      } else {
        if (minutesReference.current !== 0 && timerRunningReference.current) {
          setTimerMinutes(minutesReference.current - 1);
          //console.log("Setting seconds to 59");
          setTimerSeconds(secondsReference.current + 59);
          //await sleep(1000);
          passTime();
        } else {
          setTimerRunning(false);
          //switchCountdown();
        }
      }
    } else {
      setTimerRunning(false);
      switchCountdown();
    }
  }
  useEffect(() => {
    if (timerRunningReference.current) {
      passTime();
    }
  }, [timerRunningReference.current]);
  return (
    <div className="App">
      <div className='Website-title'>25 + 5 Clock
        <BreakControls breakLength={breakLength} sessionLength={sessionLength} onChangeSession={modifySessionLength} onChangeBreak={modifyBreakLength}/>
        <Timer minutes={timerMinutes} seconds={timerSeconds} sessionRunning={sessionRunning}/>
        <TimerControls onTimerStart={startTimer} onTimerReset={resetTimer}/>
        <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
      </div>
    </div>
  );
}

export default App;
