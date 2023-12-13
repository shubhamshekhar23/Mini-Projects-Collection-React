import React, { useState, useEffect } from "react";

import styles from "./progress-bar-container.module.scss";
import ProgressBarItem from "../progress-bar-item/progress-bar-item";

export default function ProgressBarContainer(props) {
  const [state, setState] = useState(0);

  useEffect(() => {}, []);

  return (
    <main className={styles.progress_bar_container_container}>
      <ProgressBarItem progress={state} />
      {/* <div> */}
      <input
        placeholder="Enter progress value.."
        type="number"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      {/* </div> */}
    </main>
  );
}
