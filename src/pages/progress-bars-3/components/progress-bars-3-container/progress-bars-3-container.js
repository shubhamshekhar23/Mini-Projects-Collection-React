import React, { useState, useEffect } from "react";

import styles from "./progress-bars-3-container.module.scss";
import ProgressBar3Item from "../progress-bar-3-item/progress-bar-3-item";

export default function ProgressBars3Container(props) {
  const [barList, setBarList] = useState([]);

  useEffect(() => {}, []);

  function addBar() {
    let obj = {
      id: new Date().valueOf(),
      start: false,
      done: false,
    };
    let currActive = findCurrentActive([...barList]);
    if (currActive < 3) {
      obj.start = true;
    }
    setBarList([...barList, obj]);
  }

  function handleStartOfNext(id) {
    let dummy = [...barList];
    let index = dummy.findIndex((item) => item.id == id);
    dummy[index].done = true;

    let currActive = findCurrentActive(dummy);
    if (currActive < 3) {
      if (index === dummy.length - 1) return;
      let index2 = dummy.findIndex(
        (item) => item.start == false && item.done == false
      );
      if (index2 >= 0) {
        dummy[index2].start = true;
      }
    }

    setBarList(dummy);
  }

  function findCurrentActive(dummy) {
    let arr = dummy.filter((item) => {
      if (item.start == true && item.done == false) return true;
      return false;
    });
    return arr.length;
  }

  return (
    <main className={styles.progress_bars_container_container}>
      <button onClick={addBar}>Add Progress Bar</button>

      {barList.map((item, index) => {
        return (
          <div key={item.id}>
            <ProgressBar3Item
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
