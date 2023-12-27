import React, { useState, useEffect, createContext } from "react";

import styles from "./parent.module.scss";
import Child from "../child/child";

export const DataContext = createContext();

export default function Parent(props) {
  const [state, setState] = useState("I am initial parent value");

  useEffect(() => {}, []);

  return (
    <main className={styles.parent_container}>
      <DataContext.Provider value={{ state, setState }}>
        Parent :
        <Child />
      </DataContext.Provider>
    </main>
  );
}
