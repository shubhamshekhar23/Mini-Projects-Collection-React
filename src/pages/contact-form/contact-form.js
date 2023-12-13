import React, { useState, useEffect } from "react";

import styles from "./contact-form.module.scss";
import ContactFormSection from "./components/contact-form-section/contact-form-section";

export default function ContactForm(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.contact_form_container}>
      <ContactFormSection />
    </main>
  );
}
