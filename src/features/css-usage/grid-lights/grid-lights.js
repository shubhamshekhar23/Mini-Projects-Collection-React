import React, { useState, useEffect } from "react";

import styles from "./grid-lights.module.scss";
import GridLightsContainer from "./grid-lights-container/grid-lights-container";

export default function GridLights(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.grid_lights_container}>
      <GridLightsContainer />
    </main>
  );
}
