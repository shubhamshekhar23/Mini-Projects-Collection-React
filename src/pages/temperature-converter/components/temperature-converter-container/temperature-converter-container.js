import React, { useState, useEffect } from "react";

import styles from "./temperature-converter-container.module.scss";

export default function TemperatureConverterContainer(props) {
  const [cel, setCel] = useState(0);
  const [fah, setFah] = useState(0);

  useEffect(() => {
    setFah(getFahFromCel(0));
  }, []);

  function handleCelChange(e) {
    let value = parseFloat(e.target.value);
    let value2 = parseFloat(value.toFixed(4));
    setCel(value2);
    setFah(getFahFromCel(value2));
  }

  function handleFahChange(e) {
    let value = parseFloat(e.target.value);
    let value2 = parseFloat(value.toFixed(4));
    setFah(value2);
    setCel(getCelFromFah(value2));
  }

  function getFahFromCel(celValue) {
    let val = 32 + (9 / 5) * celValue;
    return parseFloat(val.toFixed(4));
  }

  function getCelFromFah(fahValue) {
    let val = (fahValue - 32) * (5 / 9);
    return parseFloat(val.toFixed(4));
  }

  return (
    <main className={styles.temperature_converter_container_container}>
      <div className={styles.form_div}>
        <label htmlFor="celsius">celsius</label>
        <input
          type="number"
          name="celsius"
          value={cel}
          onChange={handleCelChange}
        />
      </div>
      <div>=</div>
      <div className={styles.form_div}>
        <label htmlFor="fahrenhite">fahrenhite</label>
        <input
          type="number"
          name="fahrenhite"
          value={fah}
          onChange={handleFahChange}
        />
      </div>
    </main>
  );
}
