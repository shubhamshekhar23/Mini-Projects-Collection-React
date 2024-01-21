import React, { useState, useEffect } from "react";

import styles from "./success-booking.module.scss";

export default function SuccessBooking({ goDate, returnDate }) {
  const [state, setState] = useState({});

  function isOneWay() {
    return goDate && !returnDate;
  }

  function isTwoWay() {
    return goDate && returnDate;
  }

  useEffect(() => {}, []);

  return (
    <main className={styles.success_booking_container}>
      <h5>Successful Booking</h5>
      {isOneWay() && (
        <p>One-way flight: You have booked a one-way flight on {goDate}</p>
      )}
      {isTwoWay() && (
        <p>
          Return-flight You have booked a return flight, departing on {goDate}{" "}
          and returning on {returnDate}
        </p>
      )}
    </main>
  );
}
