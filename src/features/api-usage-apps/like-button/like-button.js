import React, { useState, useEffect } from "react";

import styles from "./like-button.module.scss";
import LikeButtonContainer from "./like-button-container/like-button-container";

export default function LikeButton(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.like_button_container}>
      <LikeButtonContainer />
    </main>
  );
}
