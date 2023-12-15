import React, { useState, useEffect } from "react";

import styles from "./whack-mole-game.module.scss";
import WhackMoleContainer from "./whack-mole-container/whack-mole-container";

export default function WhackMoleGame(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.whack_mole_game_container}>
      <WhackMoleContainer />
    </main>
  );
}
