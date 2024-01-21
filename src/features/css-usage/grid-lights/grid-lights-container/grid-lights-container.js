import React, { useState, useEffect } from "react";

import styles from "./grid-lights-container.module.scss";
import GridItemBox from "../grid-item-box/grid-item-box";

export default function GridLightsContainer(props) {
  const [activeMap, setActiveMap] = useState(new Array(8).fill(false));
  const [stack, setStack] = useState([]);

  useEffect(() => {
    if (stack.length == 8) {
      let interval = setInterval(() => {
        setStack((stack) => {
          let dummy2 = [...stack];
          let pop = dummy2.pop();

          setActiveMap((activeMap) => {
            let dummy = [...activeMap];
            dummy[pop] = false;
            return dummy;
          });
          if (dummy2.length == 0) {
            clearInterval(interval);
          }
          return dummy2;
        });
      }, 300);
    }
  }, [stack]);

  function handleClick(itemId) {
    let dummy = [...activeMap];
    dummy[itemId] = true;
    setActiveMap(dummy);

    let dummy2 = [...stack];
    dummy2.push(itemId);
    setStack(dummy2);
  }

  return (
    <main className={styles.grid_lights_container_container}>
      <GridItemBox itemId={0} onClick={handleClick} activeMap={activeMap} />
      <GridItemBox itemId={1} onClick={handleClick} activeMap={activeMap} />
      <GridItemBox itemId={2} onClick={handleClick} activeMap={activeMap} />

      <GridItemBox itemId={3} onClick={handleClick} activeMap={activeMap} />
      <div className={styles.empty_box}></div>
      <GridItemBox itemId={4} onClick={handleClick} activeMap={activeMap} />

      <GridItemBox itemId={5} onClick={handleClick} activeMap={activeMap} />
      <GridItemBox itemId={6} onClick={handleClick} activeMap={activeMap} />
      <GridItemBox itemId={7} onClick={handleClick} activeMap={activeMap} />
    </main>
  );
}
