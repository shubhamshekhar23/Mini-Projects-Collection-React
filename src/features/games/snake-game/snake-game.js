import React, { useState, useEffect } from "react";

import styles from "./snake-game.module.scss";
import SnakeGameContainer from "./snake-game-container/snake-game-container";

export default function SnakeGame(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.snake_game_container}>
      <SnakeGameContainer />
    </main>
  );
}
