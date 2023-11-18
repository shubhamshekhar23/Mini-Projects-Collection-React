import React, { useRef, useState } from "react";
import CardItem from "../card-item/card-item";
import styles from "./card-board.module.scss";
import { useHandleClickHook } from "./hooks/use-handle-click.hook";

export default function CardBoard({ emojiList }) {
  const { lookup, handleCardClick } = useHandleClickHook(emojiList);

  const getCardItemList = () => {
    return emojiList.map((emoji, index) => {
      return (
        <CardItem
          key={"key" + index}
          emoji={emoji}
          isOpen={lookup[index]}
          cardIndex={index}
          handleCardClick={handleCardClick}
        />
      );
    });
  };

  return (
    <>
      <div className={styles.grid_container}>{getCardItemList()}</div>
    </>
  );
}
