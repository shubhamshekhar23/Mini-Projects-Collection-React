import React, { useState, useEffect } from "react";

import styles from "./progress-bars-container.module.scss";
import ProgressBarItem from "../progress-bar-item/progress-bar-item";

export default function ProgressBarsContainer(props) {
  const [barList, setBarList] = useState([]);

  useEffect(() => {}, []);

  function addBar() {
    setBarList([...barList, new Date().valueOf()]);
  }

  return (
    <main className={styles.progress_bars_container_container}>
      <button onClick={addBar}>Add Progress Bar</button>

      {barList.map((item) => {
        return (
          <div key={item}>
            <ProgressBarItem />
          </div>
        );
      })}
    </main>
  );
}
