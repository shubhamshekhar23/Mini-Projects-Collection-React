import React, { useState, useEffect } from "react";

import styles from "./stop-watch.module.scss";
import StopWatchContainer from "./stop-watch-container/stop-watch-container";

export default function StopWatch(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.stop_watch_container}>
      <StopWatchContainer />
    </main>
  );
}
