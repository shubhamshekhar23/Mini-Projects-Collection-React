import React, { useState, useEffect } from "react";

import styles from "./to-do-list.module.scss";
import ToDoListContainer from "./to-do-list-container/to-do-list-container";

export default function ToDoList(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.to_do_list_container}>
      <ToDoListContainer />
    </main>
  );
}
