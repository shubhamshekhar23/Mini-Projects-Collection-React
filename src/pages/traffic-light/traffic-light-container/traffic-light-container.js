import React, { useState, useEffect } from "react";

import styles from "./traffic-light-container.module.scss";

const traffic_config = {
  red: {
    delay: 4000,
    next: "green",
  },
  yellow: {
    delay: 500,
    next: "red",
  },
  green: {
    delay: 3000,
    next: "yellow",
  },
};

export default function TrafficLightContainer(props) {
  const [state, setState] = useState("green");

  useEffect(() => {}, []);

  useEffect(() => {
    setTimeout(() => {
      setState(traffic_config[state].next);
    }, traffic_config[state].delay);
  }, [state]);

  function getStyles(params) {
    if (state == params) {
      return styles[params];
    }
  }

  return (
    <main className={styles.traffic_light_container_container}>
      <div className={styles.traffic_box}>
        <div className={styles.traffic_item + " " + getStyles("red")}></div>
        <div className={styles.traffic_item + " " + getStyles("yellow")}></div>
        <div className={styles.traffic_item + " " + getStyles("green")}></div>
      </div>
    </main>
  );
}
