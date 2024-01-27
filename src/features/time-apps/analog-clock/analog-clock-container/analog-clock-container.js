import React, { useState, useEffect } from "react";

import styles from "./analog-clock-container.module.scss";

export default function AnalogClockContainer(props) {
  const [hourDeg, setHourDeg] = useState(0);
  const [minDeg, setMinDeg] = useState(0);
  const [secDeg, setSecDeg] = useState(0);

  useEffect(() => {
    /* run immediate as setinterval introduce a firstdelay */
    updateStateBasedOnCurrentTime();

    let interval = setInterval(() => {
      updateStateBasedOnCurrentTime();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function updateStateBasedOnCurrentTime() {
    const currDate = new Date();
    let hr = currDate.getHours();
    const min = currDate.getMinutes();
    const sec = currDate.getSeconds();

    if (hr >= 12) {
      hr = hr - 12;
    }

    setHourDeg((hr / 12) * 360);
    setMinDeg((min / 60) * 360);
    setSecDeg((sec / 60) * 360);
  }

  return (
    <main className={styles.analog_clock_container_container}>
      <div className={styles.clock_boundary}>
        <div className={styles.container}>
          <div className={styles.hour_hand}>
            <div
              style={{ transform: `rotate(${hourDeg}deg)` }}
              className={styles.hour_hand_item}
            ></div>
          </div>
          <div className={styles.minute_hand}>
            <div
              style={{ transform: `rotate(${minDeg}deg)` }}
              className={styles.minute_hand_item}
            ></div>
          </div>
          <div className={styles.second_hand}>
            <div
              style={{ transform: `rotate(${secDeg}deg)` }}
              className={styles.second_hand_item}
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}
