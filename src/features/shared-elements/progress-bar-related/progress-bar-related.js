import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./progress-bar-related.module.scss";

export default function ProgressBarRelated(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.progress_bar_related_container}>
      <h4>Progress bar related UI</h4>
      <section className={styles.comp_links}>
        <Link to="progress-bar">progress-bar</Link>
        <Link to="progress-bars">progress-bars</Link>
        <Link to="progress-bars-2">progress-bars-2</Link>
        <Link to="progress-bars-3">progress-bars-3</Link>
      </section>
    </main>
  );
}
