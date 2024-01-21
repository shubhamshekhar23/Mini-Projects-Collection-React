import React, { useState, useEffect } from "react";

import styles from "./flight-booker-container.module.scss";
import FlightBookerForm from "../flight-booker-form/flight-booker-form";
import SuccessBooking from "../success-booking/success-booking";

export default function FlightBookerContainer(props) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({});

  function handleSubmit(data) {
    setIsSubmit(true);
    setFormData(data);
  }

  useEffect(() => {}, []);

  return (
    <main className={styles.flight_booker_container_container}>
      {!isSubmit && <FlightBookerForm handleSubmit={handleSubmit} />}
      {isSubmit && <SuccessBooking {...formData} />}
    </main>
  );
}
