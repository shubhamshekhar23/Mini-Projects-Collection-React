import React, { useState, useEffect } from "react";

import styles from "./undoable-counter.module.scss";
import UndoableCounterContainer from "./undoable-counter-container/undoable-counter-container";

export default function UndoableCounter(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.undoable_counter_container}>
      <UndoableCounterContainer />
    </main>
  );
}
