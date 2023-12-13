import React, { useState, useEffect } from "react";

import styles from "./accordion.module.scss";
import SimpleAccordion from "./components/simple-accordion/simple-accordion";

export default function Accordion(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.accordion_container}>
      <SimpleAccordion title={"I am header"}>
        <h1>I am body</h1>
      </SimpleAccordion>
    </main>
  );
}
