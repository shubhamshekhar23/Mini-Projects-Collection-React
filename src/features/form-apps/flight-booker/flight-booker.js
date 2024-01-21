import React, { useState, useEffect } from "react";

import styles from "./flight-booker.module.scss";
import FlightBookerContainer from "./components/flight-booker-container/flight-booker-container";

export default function FlightBooker(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.flight_booker_container}>
      <FlightBookerContainer />
    </main>
  );
}
