import React, { useState, useEffect } from "react";

import styles from "./simple-accordion.module.scss";

export default function SimpleAccordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {}, []);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  function getStylesForHeader() {
    if (isOpen) {
      return styles.accordion_header__open;
    }
    return "";
  }

  function getStylesForBody(params) {
    if (isOpen) {
      return styles.accordion_body__open;
    }
    return "";
  }

  return (
    <main className={styles.simple_accordion_container}>
      <div
        className={styles.accordion_header + " " + getStylesForHeader()}
        onClick={toggleAccordion}
      >
        {props.title}
        <span className={styles.chevron}>{">"}</span>
      </div>
      <div className={styles.accordion_body + " " + getStylesForBody()}>
        {props.children}
      </div>
    </main>
  );
}
