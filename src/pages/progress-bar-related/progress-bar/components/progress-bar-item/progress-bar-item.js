import React, { useState, useEffect } from "react";

import styles from "./progress-bar-item.module.scss";

export default function ProgressBarItem({ progress }) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  function getWidth() {
    if (!progress) return "0%";
    if (progress > 100) return "100%";
    return progress + "%";
  }

  return (
    <main className={styles.progress_bar_item_container}>
      <div className={styles.progress_bar}>
        {!!progress && (
          <div
            style={{ width: getWidth() }}
            className={styles.progress_bar_success}
          >
            {progress} %
          </div>
        )}
      </div>
    </main>
  );
}
