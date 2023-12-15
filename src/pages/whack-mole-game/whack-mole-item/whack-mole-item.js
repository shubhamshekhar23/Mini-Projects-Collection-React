import React, { useState, useEffect } from "react";

import styles from "./whack-mole-item.module.scss";

export default function WhackMoleItem(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.whack_mole_item_container}>
      {props.show && (
        <img
          className={styles.head}
          onClick={() => props.onClick(props.index)}
          src="https://www.greatfrontend.com/img/questions/whack-a-mole/mole-head.png"
        />
      )}
      <img
        className={styles.hole}
        src="https://www.greatfrontend.com/img/questions/whack-a-mole/mole-hill.png"
      />
    </main>
  );
}
