import React, { useState, useEffect } from "react";

import styles from "./progress-bars-2-container.module.scss";
import ProgressBar2Item from "../progress-bar-2-item/progress-bar-2-item";

export default function ProgressBars2Container(props) {
  const [barList, setBarList] = useState([]);

  useEffect(() => {}, []);

  function addBar() {
    let obj = {
      id: new Date().valueOf(),
      start: false,
    };
    if (barList.length == 0) {
      obj.start = true;
    }
    setBarList([...barList, obj]);
  }

  function handleStartOfNext(id) {
    let dummy = [...barList];
    let index = dummy.findIndex((item) => item.id == id);

    if (index === dummy.length - 1) return;
    dummy[index + 1].start = true;

    setBarList(dummy);
  }

  return (
    <main className={styles.progress_bars_container_container}>
      <button onClick={addBar}>Add Progress Bar</button>

      {barList.map((item, index) => {
        return (
          <div key={item.id}>
            <ProgressBar2Item
              id={item.id}
              onComplete={handleStartOfNext}
              start={barList[index].start}
            />
          </div>
        );
      })}
    </main>
  );
}
