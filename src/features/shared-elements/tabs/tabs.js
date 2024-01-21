import React, { useState, useEffect } from "react";

import styles from "./tabs.module.scss";
import TabsContainer from "./tabs-container/tabs-container";

export default function Tabs(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.tabs_container}>
      <TabsContainer />
    </main>
  );
}
