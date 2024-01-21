import React, { useState, useEffect } from "react";

import styles from "./sign-up-form.module.scss";
import SignUpFormContainer from "./sign-up-form-container/sign-up-form-container";

export default function SignUpForm(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.sign_up_form_container}>
      <SignUpFormContainer />
    </main>
  );
}
