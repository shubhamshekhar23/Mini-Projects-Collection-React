import React, { useState, useEffect } from "react";

import styles from "./rock-paper-scissors.module.scss";
import RockPaperScissorsContainer from "./rock-paper-scissors-container/rock-paper-scissors-container";

export default function RockPaperScissors(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.rock_paper_scissors_container}>
      <RockPaperScissorsContainer />
    </main>
  );
}
