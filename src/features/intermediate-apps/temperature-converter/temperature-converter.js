import React, { useState, useEffect } from "react";

import styles from "./temperature-converter.module.scss";
import TemperatureConverterContainer from "./components/temperature-converter-container/temperature-converter-container";

export default function TemperatureConverter(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.temperature_converter_container}>
      <TemperatureConverterContainer />
    </main>
  );
}
