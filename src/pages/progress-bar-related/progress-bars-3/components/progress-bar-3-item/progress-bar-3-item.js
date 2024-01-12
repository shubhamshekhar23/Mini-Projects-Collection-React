import React, { useState, useEffect, useRef } from "react";

import styles from "./progress-bar-3-item.module.scss";

export default function ProgressBar3Item(props) {
  const [progress, setProgress] = useState(0);
  const interval = useRef();

  useEffect(() => {
    if (props.start) {
      interval.current = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 80);
    }
  }, [props.start]);

  useEffect(() => {
    if (progress == 100) {
      props.onComplete(props.id);
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
