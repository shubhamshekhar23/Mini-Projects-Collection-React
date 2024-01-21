import React, { useState, useEffect } from "react";

import styles from "./skeleton-loader.module.scss";
import SkeletonLoaderContainer from "./skeleton-loader-container/skeleton-loader-container";

export default function SkeletonLoader(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.skeleton_loader_container}>
      <h2>Skeleton Loader</h2>
      <SkeletonLoaderContainer />
    </main>
  );
}
