import React, { useState, useEffect } from "react";

import styles from "./mortgage-calculator.module.scss";
import MortgageCalculatorContainer from "./components/mortgage-calculator-container/mortgage-calculator-container";

export default function MortgageCalculator(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.mortgage_calculator_container}>
      <MortgageCalculatorContainer />
    </main>
  );
}
