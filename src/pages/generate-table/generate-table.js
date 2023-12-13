import React, { useState, useEffect } from "react";

import styles from "./generate-table.module.scss";
import GenerateTableContainer from "./components/generate-table-container/generate-table-container";

export default function GenerateTable(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.generate_table_container}>
      <GenerateTableContainer />
    </main>
  );
}
