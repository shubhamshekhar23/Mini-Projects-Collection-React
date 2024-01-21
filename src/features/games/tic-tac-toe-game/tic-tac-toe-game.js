import { useState, useEffect } from "react";

import styles from "./tic-tac-toe-game.module.scss";

import GameBoard from "./components/game-board/game-board";

export default function TicTacToeGame() {
  return (
    <div className={styles.tic_tac_container}>
      <GameBoard />
    </div>
  );
}
