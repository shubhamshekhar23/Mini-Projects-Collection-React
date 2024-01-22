import React, { useState, useEffect } from "react";

import styles from "./drawer.module.scss";
import DrawerContainer from "./drawer-container/drawer-container";

export default function Drawer(props) {
  const [state, setState] = useState(false);

  useEffect(() => {}, []);

  return (
    <main className={styles.drawer_container}>
      <button onClick={() => setState(!state)}>Open Drawer</button>
      {state && <DrawerContainer onClose={() => setState(false)} />}
    </main>
  );
}
