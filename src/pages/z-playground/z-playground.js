import React, { useState, useEffect } from "react";

import styles from "./z-playground.module.scss";
import Parent from "./parent/parent";

export default function ZPlayground(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.z_playground_container}>
      <Parent />
    </main>
  );
}
