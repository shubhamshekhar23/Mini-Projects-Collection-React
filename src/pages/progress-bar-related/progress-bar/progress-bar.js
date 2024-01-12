import React, { useState, useEffect } from "react";

import styles from "./progress-bar.module.scss";
import ProgressBarContainer from "./components/progress-bar-container/progress-bar-container";

export default function ProgressBar(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.progress_bar_container}>
      <ProgressBarContainer />
    </main>
  );
}
