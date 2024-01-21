import React, { useState, useEffect } from "react";

import styles from "./single-digit.module.scss";

const initial_state = {
  upper_top: false,
  upper_left: false,
  upper_right: false,
  mid: false,
  lower_left: false,
  lower_right: false,
  lower_bottom: false,
};

export default function SingleDigit(props) {
  const [uiConfig, setUiConfig] = useState(initial_state);

  useEffect(() => {
    updateUiConfig(props.digit);
  }, [props.digit]);

  function updateUiConfig(digit) {
    let dig = parseInt(digit);
    if (dig == 1)
      return setUiConfig({
        ...initial_state,
        upper_right: true,
        lower_right: true,
      });
    if (dig == 2)
      return setUiConfig({
        ...initial_state,
        upper_top: true,
        upper_right: true,
        mid: true,
        lower_left: true,
        lower_bottom: true,
      });
    if (dig == 3)
      return setUiConfig({
        ...initial_state,
        upper_top: true,
        upper_right: true,
        mid: true,
        lower_right: true,
        lower_bottom: true,
      });
    if (dig == 4)
      return setUiConfig({
        ...initial_state,
        upper_left: true,
        upper_right: true,
        mid: true,
        lower_right: true,
      });
    if (dig == 5)
      return setUiConfig({
        ...initial_state,
        upper_top: true,
        upper_left: true,
        mid: true,
        lower_right: true,
        lower_bottom: true,
      });
    if (dig == 6)
      return setUiConfig({
        ...initial_state,
        upper_top: true,
        upper_left: true,
        lower_left: true,
        lower_right: true,
        mid: true,
        lower_bottom: true,
      });
    if (dig == 7)
      return setUiConfig({
        ...initial_state,
        upper_top: true,
        upper_right: true,
        lower_right: true,
      });
    if (dig == 8)
      return setUiConfig({
        ...initial_state,
        upper_top: true,
        upper_left: true,
        upper_right: true,
        mid: true,
        lower_left: true,
        lower_right: true,
        lower_bottom: true,
      });
    if (dig == 9)
      return setUiConfig({
        ...initial_state,
        upper_top: true,
        upper_left: true,
        upper_right: true,
        mid: true,
        lower_right: true,
        lower_bottom: true,
      });
    if (dig == 0)
      return setUiConfig({
        ...initial_state,
        upper_top: true,
        upper_left: true,
        upper_right: true,
        lower_left: true,
        lower_right: true,
        lower_bottom: true,
      });
  }

  function getStyles(type) {
    if (!uiConfig[type])
      return {
        visibility: "hidden",
      };
  }

  return (
    <main className={styles.single_digit_container}>
      <div style={getStyles("upper_top")} className={styles.upper_top}></div>
      <div className={styles.left_right_box}>
        <div
          style={getStyles("upper_left")}
          className={styles.upper_left}
        ></div>
        <div
          style={getStyles("upper_right")}
          className={styles.upper_right}
        ></div>
      </div>
      <div style={getStyles("mid")} className={styles.mid}></div>
      <div className={styles.left_right_box}>
        <div
          style={getStyles("lower_left")}
          className={styles.lower_left}
        ></div>
        <div
          style={getStyles("lower_right")}
          className={styles.lower_right}
        ></div>
      </div>
      <div
        style={getStyles("lower_bottom")}
        className={styles.lower_bottom}
      ></div>
    </main>
  );
}
