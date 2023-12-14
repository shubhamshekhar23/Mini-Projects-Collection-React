import React, { useState, useEffect } from "react";

import styles from "./mortgage-calculator-result.module.scss";

export default function MortgageCalculatorResult({
  monthlyMortgageAmount,
  totalPaymentAMount,
  totalInterestPaid,
}) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.mortgage_calculator_result_container}>
      <p>Monthly Morgage Amount : {monthlyMortgageAmount}</p>
      <p>Total payment Amount : {totalPaymentAMount}</p>
      <p>Total Interest Paid : {totalInterestPaid}</p>
    </main>
  );
}
