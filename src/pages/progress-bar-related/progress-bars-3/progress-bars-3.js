import React, { useState, useEffect } from "react";

import styles from "./progress-bars-3.module.scss";
import ProgressBars3Container from "./components/progress-bars-3-container/progress-bars-3-container";

export default function ProgressBars_3(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.progress_bars_3_container}>
      <ProgressBars3Container />
    </main>
  );
}
