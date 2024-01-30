import React, { useState, useEffect, useRef } from "react";

import styles from "./self-multi-typing-container.module.scss";

const TEXT_ARRAY = [
  "writer",
  "developer",
  "guitarist",
  "singer",
  "philosopher",
];

export default function SelfMultiTypingContainer(props) {
  const [text, setText] = useState("");
  const [currIndex, setCurrIndex] = useState(0);
  const typeSpeed = useRef(400);

  useEffect(() => {
    if (currIndex >= TEXT_ARRAY.length) {
      setCurrIndex(0);
      return;
    }
    const word = TEXT_ARRAY[currIndex];
    let index = 0;

    let myInterval = setInterval(() => {
      setText(word.substring(0, index));
      index++;
      if (index >= word.length) {
        clearInterval(myInterval);
        moveBack(word, index);
      }
    }, typeSpeed.current);

    return () => {
      clearInterval(myInterval);
    };
  }, [currIndex]);

  const moveBack = (word, index) => {
    let myInterval2 = setInterval(() => {
      setText(word.substring(0, index));
      index--;
      if (index <= -1) {
        clearInterval(myInterval2);
        setCurrIndex(currIndex + 1);
      }
    }, typeSpeed.current);
  };

  const writingTextElement = text.split("").map((item, index) => {
    const className = index === 0 ? styles.text_char : "";
    return (
      <span key={index} className={className}>
        {item}
      </span>
    );
  });

  return (
    <main className={styles.self_multi_typing_container_container}>
      <h1>
        <span className={styles.contant_text}>I am a </span>
        {writingTextElement}
        <div className={styles.vertical_line}></div>
      </h1>
    </main>
  );
}
