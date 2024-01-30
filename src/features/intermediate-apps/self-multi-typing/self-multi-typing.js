import React, { useState, useEffect } from "react";

import styles from "./self-multi-typing.module.scss";
import SelfMultiTypingContainer from "./self-multi-typing-container/self-multi-typing-container";

export default function SelfMultiTyping(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.self_multi_typing_container}>
      <SelfMultiTypingContainer />
    </main>
  );
}
