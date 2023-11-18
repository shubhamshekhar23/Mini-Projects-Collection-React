import { useState, useEffect } from "react";
import styles from "./board-item-box.module.scss";

export default function BoardItemBox({
  position,
  markedBy,
  handleClick,
  isUsed,
}) {
  function getValue() {
    if (markedBy == 1) return "O";
    if (markedBy == 2) return "*";
  }

  function getClassName() {
    let strClass = [styles.board_item];
    if (!isUsed) return strClass;
    if (markedBy == 1) strClass.push(styles.green_item);
    if (markedBy == 2) strClass.push(styles.red_item);

    return strClass.join(" ");
  }

  return (
    <div className={getClassName()} onClick={() => handleClick(position)}>
      {getValue()}
    </div>
  );
}
