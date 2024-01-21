import React, { useState, useEffect } from "react";

import styles from "./spinning-loader.module.scss";
import SpinningLoaderContainer from "./spinning-loader-container/spinning-loader-container";

export default function SpinningLoader(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.spinning_loader_container}>
      <h4>Spinning Loader</h4>
      <SpinningLoaderContainer />
    </main>
  );
}
