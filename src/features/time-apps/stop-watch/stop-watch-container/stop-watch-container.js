import React, { useState, useEffect, useRef } from "react";

import styles from "./stop-watch-container.module.scss";
import StopWatchSection from "../stop-watch-section/stop-watch-section";

export default function StopWatchContainer(props) {
  const [isRunning, setIsRunning] = useState(false);
  const [hour, setHour] = useState(null);
  const [min, setMin] = useState(null);
  const [sec, setSec] = useState(null);
  const [ms, setMs] = useState(null);

  const interval = useRef();

  useEffect(() => {
    if (ms === 0) {
      setSec((sec) => {
        if (sec == null) return 1;
        if (sec == 59) {
          return 0;
        }
        return sec + 1;
      });
    }
  }, [ms]);

  useEffect(() => {
    if (sec === 0) {
      setMin((min) => {
        if (min == null) return 1;
        if (min == 59) {
          return 0;
        }
        return min + 1;
      });
    }
  }, [sec]);

  useEffect(() => {
    if (min === 0) {
      setHour((hr) => {
        if (hr == null) return 1;
        return hr + 1;
      });
    }
  }, [min]);

  function startStopWatch(params) {
    if (isRunning) {
      stopWatch();
      setIsRunning(false);
      return;
    }
    startwatch();
    setIsRunning(true);
  }

  function startwatch() {
    interval.current = setInterval(() => {
      setMs((ms) => {
        if (ms == null) return 1;
        if (ms == 99) {
          return 0;
        }
        return ms + 1;
      });
    }, 10);
  }

  function stopWatch(params) {
    clearInterval(interval.current);
  }

  function resetStopwatch(params) {
    setIsRunning(false);
    stopWatch();
    setHour(null);
    setMin(null);
    setSec(null);
    setMs(null);
  }

  return (
    <main className={styles.stop_watch_container_container}>
      <StopWatchSection
        hour={hour === null ? 0 : hour}
        min={min === null ? 0 : min}
        sec={sec === null ? 0 : sec}
        ms={ms === null ? 0 : ms}
        onClick={startStopWatch}
      ></StopWatchSection>
      <div className={styles.action}>
        <button onClick={startStopWatch}>
          {!isRunning ? "Start" : "Stop"}
        </button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </main>
  );
}
