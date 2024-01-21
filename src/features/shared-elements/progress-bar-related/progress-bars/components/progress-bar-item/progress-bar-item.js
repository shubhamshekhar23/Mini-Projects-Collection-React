import React, { useState, useEffect, useRef } from "react";

import styles from "./progress-bar-item.module.scss";

export default function ProgressBarItem(props) {
  const [progress, setProgress] = useState(0);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 20);
  }, []);

  useEffect(() => {
    if (progress == 100) {
      clearInterval(interval.current);
    }
  }, [progress]);

  function getWidth() {
    if (!progress) return "0%";
    if (progress > 100) return "100%";
    return progress + "%";
  }

  return (
    <main className={styles.progress_bar_item_container}>
      <div className={styles.progress_bar}>
        <div
          style={{ width: getWidth() }}
          className={styles.progress_bar_success}
        ></div>
      </div>
    </main>
  );
}
