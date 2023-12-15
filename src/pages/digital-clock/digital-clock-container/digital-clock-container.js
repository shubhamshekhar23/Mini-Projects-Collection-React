import React, { useState, useEffect, useRef } from "react";

import styles from "./digital-clock-container.module.scss";
import SingleDigit from "../single-digit/single-digit";
import NumberDigits from "../number-digits/number-digits";

export default function DigitalClockContainer(props) {
  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const interval = useRef();

  useEffect(() => {
    updateCurrentState();

    interval.current = setInterval(() => {
      updateCurrentState();
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  function updateCurrentState(params) {
    const currDate = new Date();
    setHr(currDate.getHours());
    setMin(currDate.getMinutes());
    setSec(currDate.getSeconds());
  }

  return (
    <main className={styles.digital_clock_container_container}>
      <NumberDigits num={hr} />
      <span>:</span>
      <NumberDigits num={min} />
      <span>:</span>
      <NumberDigits num={sec} />
    </main>
  );
}
