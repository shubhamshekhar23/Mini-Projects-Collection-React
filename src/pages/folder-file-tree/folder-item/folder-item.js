import React, { useState, useEffect } from "react";

import styles from "./folder-item.module.scss";

export default function FolderItem(props) {
  const [isContentShow, setIsContentShow] = useState(false);

  useEffect(() => {}, []);

  function handleClick(params) {
    setIsContentShow(!isContentShow);
    props.onClick();
  }

  return (
    <main className={styles.folder_item_container}>
      <label
        className={props.isActive ? styles.active : ""}
        onClick={handleClick}
      >
        {props.name}
      </label>
      <div className={styles.folder_content_container}>{props.children}</div>
    </main>
  );
}
