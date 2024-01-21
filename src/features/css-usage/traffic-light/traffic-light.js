import React, { useState, useEffect } from "react";

import styles from "./traffic-light.module.scss";
import TrafficLightContainer from "./traffic-light-container/traffic-light-container";

export default function TrafficLight(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.traffic_light_container}>
      <TrafficLightContainer />
    </main>
  );
}
