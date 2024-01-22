import React, { useState, useEffect } from "react";

import styles from "./otp-input.module.scss";
import OtpInputContainer from "./otp-input-container/otp-input-container";

export default function OtpInput(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.otp_input_container}>
      <OtpInputContainer />
    </main>
  );
}
