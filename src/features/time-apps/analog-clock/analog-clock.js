import React, { useState, useEffect } from "react";

import styles from "./analog-clock.module.scss";
import AnalogClockContainer from "./analog-clock-container/analog-clock-container";

export default function AnalogClock(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.analog_clock_container}>
      <AnalogClockContainer />
    </main>
  );
}
