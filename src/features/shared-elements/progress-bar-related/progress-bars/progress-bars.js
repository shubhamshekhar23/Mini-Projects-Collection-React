import React, { useState, useEffect } from "react";

import styles from "./progress-bars.module.scss";
import ProgressBarsContainer from "./components/progress-bars-container/progress-bars-container";

export default function ProgressBars(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.progress_bars_container}>
      <ProgressBarsContainer />
    </main>
  );
}
