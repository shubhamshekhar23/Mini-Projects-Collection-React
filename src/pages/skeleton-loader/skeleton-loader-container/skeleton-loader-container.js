import React, { useState, useEffect } from "react";

import styles from "./skeleton-loader-container.module.scss";

export default function SkeletonLoaderContainer(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.skeleton_loader_container_container}>
      <section className={styles.skeleton_wrapper}>
        <div className={styles.main_skeleton}></div>
        <div className={styles.footer_one}></div>
        <div className={styles.footer_two}></div>
        <div className={styles.footer_three}></div>
        <div className={styles.moving_shadow}></div>
      </section>
    </main>
  );
}
