import React, { useState, useEffect } from "react";

import styles from "./stop-watch-section.module.scss";

export default function StopWatchSection(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  function padTwoDigit(num) {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  }

  return (
    <div className={styles.stopwatch_section} onClick={props.onClick}>
      <div className={styles.time}>
        {padTwoDigit(props.hour)} <span>H</span>
      </div>
      <div className={styles.time}>
        {padTwoDigit(props.min)} <span>M</span>
      </div>
      <div className={styles.time}>
        {padTwoDigit(props.sec)} <span>S</span>
      </div>
      <div className={styles.time}>
        {padTwoDigit(props.ms)} <span>Ms</span>
      </div>
    </div>
  );
}
