import React, { useState, useEffect } from "react";

import styles from "./file-item.module.scss";

export default function FileItem(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.file_item_container}>
      <label
        className={props.isActive ? styles.active : ""}
        onClick={props.onClick}
      >
        {props.name}
      </label>
    </main>
  );
}
