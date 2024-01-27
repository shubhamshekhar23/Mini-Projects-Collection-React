import React, { useState, useEffect } from "react";

import styles from "./mortgage-calculator-form.module.scss";

const INITIAL_STATE = {
  loanAmount: 0,
  annualInterestRate: 0,
  loanTerm: 0,
};

export default function MortgageCalculatorForm(props) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  useEffect(() => {}, []);

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (
      formData.loanAmount == 0 ||
      formData.annualInterestRate == 0 ||
      formData.loanTerm == 0
    ) {
      alert("Values canot be 0");
      return;
    }
    props.handleSubmit(formData);
  }

  return (
    <main className={styles.mortgage_calculator_form_container}>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="loanAmount">LoanAmount</label>
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="loanTerm">Loan Term in years</label>
          <input
            type="number"
            name="loanTerm"
            value={formData.loanTerm}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="annualInterestRate">Annual Interest Rate</label>
          <input
            type="number"
            name="annualInterestRate"
            value={formData.annualInterestRate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
    </main>
  );
}
