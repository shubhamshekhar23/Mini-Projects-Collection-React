import React, { useState, useEffect } from "react";

import styles from "./number-digits.module.scss";
import SingleDigit from "../single-digit/single-digit";

export default function NumberDigits(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    const dig = "" + props.num;
    let arr = dig.split("");
    arr = arr.map((item) => parseInt(item));
    setState(arr);
  }, [props.num]);

  return (
    <main className={styles.number_digits_container}>
      {state.map((item, index) => {
        return <SingleDigit key={index} digit={item} />;
      })}
    </main>
  );
}
