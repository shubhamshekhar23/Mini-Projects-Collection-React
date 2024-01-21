import React, { useState } from "react";
import CardBoard from "./components/card-board/card-board";
import styles from "./memory-card-game.module.scss";
import { getRandomListOfEmojis } from "./service/emoji-provider.service.js";

export default function MemoryCardGame() {
  const [emojiList, setEmojiList] = useState(getRandomListOfEmojis());

  return (
    <div className={styles.game_container}>
      <h3>Memory Card Game</h3>
      <CardBoard emojiList={emojiList} />
    </div>
  );
}
