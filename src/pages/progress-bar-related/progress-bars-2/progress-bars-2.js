import React, { useState, useEffect } from "react";

import styles from "./progress-bars-2.module.scss";
import ProgressBars2Container from "./components/progress-bars-2-container/progress-bars-2-container";

export default function ProgressBars_2(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.progress_bars_2_container}>
      <ProgressBars2Container />
    </main>
  );
}
