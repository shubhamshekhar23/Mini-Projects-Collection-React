import React, { useState, useEffect } from "react";

import styles from "./grid-item-box.module.scss";

export default function GridItemBox(props) {
  function getStyles() {
    if (props.activeMap[props.itemId]) {
      return styles.active;
    }
  }

  return (
    <main
      className={styles.grid_item_box_container + " " + getStyles()}
      onClick={() => props.onClick(props.itemId)}
    ></main>
  );
}
