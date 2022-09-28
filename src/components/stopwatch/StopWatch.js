import React, { useState, useEffect } from "react";
import styles from "./stopWatch.module.css";
const StopWatch = () => {
  const [start, setStart] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [miliSeconds, setMiliSeconds] = useState(0);
  const [lap, setLap] = useState([]);

  const laps = {
    backgroundColor: start ? "#3ce0e0" : "#8181eb",
  };
  useEffect(() => {
    let mytimer = null;
    if (start) {
      mytimer = setInterval(() => {
        setMiliSeconds((prevtime) => prevtime + 1);
        if (miliSeconds > 98) {
          setMiliSeconds(0);
          setSeconds(seconds + 1);
        }
        if (seconds > 59) {
          setSeconds(0);
          setMinutes(minutes + 1);
        }
      }, 10);
    } else {
      clearInterval(mytimer);
    }

    return () => {
      clearInterval(mytimer);
    };
  }, [start, miliSeconds, seconds, minutes]);

  const reset = () => {
    setStart(false);
    setMiliSeconds(0);
    setSeconds(0);
    setMinutes(0);
    setLap([]);
  };

  const lapTime = () => {
    setLap([
      ...lap,
      `${minutes < 10 ? "0" + minutes : minutes} : ${
        seconds < 10 ? "0" + seconds : seconds
      } : ${miliSeconds}`,
    ]);
    console.log(lap);
  };
  return (
    <div className={styles.stopWatch}>
      <div>
        <div className={styles.timer}>
          <h1>
            <span>{minutes < 10 ? "0" + minutes : minutes}</span>:
            <span>{seconds < 10 ? "0" + seconds : seconds}</span>:
            <span>{miliSeconds < 10 ? "0" + miliSeconds : miliSeconds}</span>
          </h1>
        </div>
        {start ? (
          <button className={styles.stop} onClick={() => setStart(!start)}>
            Stop
          </button>
        ) : (
          <button className={styles.start} onClick={() => setStart(!start)}>
            Start
          </button>
        )}
        <button className={styles.reset} onClick={reset}>
          Reset
        </button>
        <button style={laps} onClick={lapTime} disabled={!start}>
          Lap
        </button>
      </div>
      {lap.length > 0 && (
        <div className={styles.lapList}>
          {lap.map((newlap, i) => {
            return <div key={i}>{newlap}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default StopWatch;
