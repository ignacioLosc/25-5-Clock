import { useEffect, useState } from 'react';
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
    await sleep(1000);
    setTimerRunning(true);
  }
  function resetTimer() {
    console.log("resetting timer");
    flushSync(() => {
      setTimerRunning(false);
    });
    //setTimerRunning(false);
    setTimerMinutes(25);
    setTimerSeconds(0);
    setSessionLength("25");
    setBreakLength("5");
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function passTime() {
    //console.log("passing time");
    //console.log(timerRunning);
    if (!(timerMinutes === 0 && timerSeconds === 0)) {
      //console.log("passing time, time not over");
      console.log("timerSeconds: " + timerSeconds);
      if (timerSeconds !== 0 && timerRunning) {
        console.log("Decreasing seconds to: " + (timerSeconds - 1).toString());
        setTimerSeconds(timerSeconds - 1);
        await sleep(1000);
        passTime();
      } else {
        if (timerMinutes !== 0 && timerRunning) {
          setTimerMinutes(timerMinutes - 1);
          console.log("Setting seconds to 59");
          setTimerSeconds(59);
          await sleep(1000);
          setTimerSeconds(59);
          passTime();
        } else {
          setTimerRunning(false);
        }
      }
    } else {
      setTimerRunning(false);
    }
  }
  useEffect(() => {
    if (timerRunning) {
      passTime();
    }
  }, [timerRunning]);
  return (
    <div className="App">
      <div className='Website-title'>25 + 5 Clock
        <BreakControls breakLength={breakLength} sessionLength={sessionLength} onChangeSession={modifySessionLength} onChangeBreak={modifyBreakLength}/>
        <Timer minutes={timerMinutes} seconds={timerSeconds}/>
        <TimerControls onTimerStart={startTimer} onTimerReset={resetTimer}/>
      </div>
    </div>
  );
}

export default App;
