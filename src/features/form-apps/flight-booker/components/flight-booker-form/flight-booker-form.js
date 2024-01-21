import React, { useState, useEffect } from "react";

import styles from "./flight-booker-form.module.scss";

export default function FlightBookerForm(props) {
  const [journeyType, setJourneyType] = useState("oneWay");
  const [goDate, setGoDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [errorMessage, seterrorMessage] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {}, []);

  function handleSubmit() {
    let currDate = new Date();
    if (currDate >= new Date(goDate)) {
      seterrorMessage("Departure Date can not be in Past");
      return;
    }
    if (new Date(goDate) > new Date(returnDate)) {
      seterrorMessage("Return Date can not be in Past than Departure Date");
      return;
    }
    if (journeyType == "oneWay") {
      props.handleSubmit({ goDate, returnDate: "" });
    } else {
      props.handleSubmit({ goDate, returnDate });
    }
  }

  return (
    <main className={styles.flight_booker_form_container}>
      {/* Select type */}
      <select
        name="journeyType"
        onChange={(e) => setJourneyType(e.target.value)}
      >
        <option value="oneWay">One-way Flight</option>
        <option value="twoWay">Return Flight</option>
      </select>

      {/* Date */}
      <div className={styles.form_field}>
        <label htmlFor="goDate">Boarding Date :</label>
        <input
          type="date"
          name="goDate"
          onChange={(e) => setGoDate(e.target.value)}
        />
      </div>
      {journeyType == "twoWay" && (
        <div className={styles.form_field}>
          <label htmlFor="returnDate">Return Date :</label>
          <input
            type="date"
            name="returnDate"
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
      )}
      <p className={styles.error_message}>{errorMessage}</p>
      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
}
