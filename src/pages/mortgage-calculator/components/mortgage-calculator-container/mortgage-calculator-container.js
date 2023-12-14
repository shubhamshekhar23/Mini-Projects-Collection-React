import React, { useState, useEffect } from "react";

import styles from "./mortgage-calculator-container.module.scss";
import MortgageCalculatorForm from "../mortgage-calculator-form/mortgage-calculator-form";
import MortgageCalculatorResult from "../mortgage-calculator-result/mortgage-calculator-result";

export default function MortgageCalculatorContainer(props) {
  const [isCalculated, setIsCalculated] = useState(false);
  const [calculationData, setCalculationData] = useState({});

  useEffect(() => {}, []);

  function calculateMonthlyMortgageAmountDetails(formData) {
    const i = formData.annualInterestRate / 100 / 12;
    const n = formData.loanTerm * 12;
    const p = formData.loanAmount;

    const power = Math.pow(1 + i, n);

    const monthlyMortgage = (p * i * power) / (power - 1);
    const totalPayment = monthlyMortgage * n;
    const totalInterest = totalPayment - p;
    return {
      monthlyMortgageAmount: monthlyMortgage.toFixed(4),
      totalPaymentAMount: totalPayment.toFixed(4),
      totalInterestPaid: totalInterest.toFixed(4),
    };
  }

  function handleSubmit(formData) {
    const res = calculateMonthlyMortgageAmountDetails(formData);
    setCalculationData(res);
    setIsCalculated(true);
  }

  return (
    <main className={styles.mortgage_calculator_container_container}>
      <MortgageCalculatorForm handleSubmit={handleSubmit} />
      {isCalculated && <MortgageCalculatorResult {...calculationData} />}
    </main>
  );
}
