import React, { useState, useEffect } from "react";

import styles from "./tweet-container.module.scss";
import TweetSection from "../tweet-section/tweet-section";

export default function TweetContainer(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.tweet_container_container}>
      <TweetSection />
    </main>
  );
}
