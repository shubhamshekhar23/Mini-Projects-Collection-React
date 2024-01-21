import React, { useState, useEffect } from "react";

import styles from "./tweet.module.scss";
import TweetContainer from "./components/tweet-container/tweet-container";

export default function Tweet(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.tweet_container}>
      <TweetContainer />
    </main>
  );
}
