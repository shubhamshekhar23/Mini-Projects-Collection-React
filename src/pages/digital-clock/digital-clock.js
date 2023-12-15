import React, { useState, useEffect } from "react";

import styles from "./digital-clock.module.scss";
import DigitalClockContainer from "./digital-clock-container/digital-clock-container";

export default function DigitalClock(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.digital_clock_container}>
      <DigitalClockContainer />
    </main>
  );
}
