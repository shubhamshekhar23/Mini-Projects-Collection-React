import React, { useState, useEffect } from "react";

import styles from "./spinning-loader-container.module.scss";

export default function SpinningLoaderContainer(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.spinning_loader_container_container}>
      <section className={styles.spinning_loader}></section>
    </main>
  );
}
