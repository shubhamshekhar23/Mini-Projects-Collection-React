import React, { useState } from "react";
import styles from "./card-item.module.scss";

export default function CardItem({
  isOpen,
  emoji,
  handleCardClick,
  cardIndex,
}) {
  function cardClicked() {
    handleCardClick(cardIndex);
  }

  function getEmoji() {
    if (isOpen) return emoji;
    return <>?</>;
  }

  return (
    <div className={styles.grid_item} onClick={cardClicked}>
      {getEmoji()}
    </div>
  );
}
