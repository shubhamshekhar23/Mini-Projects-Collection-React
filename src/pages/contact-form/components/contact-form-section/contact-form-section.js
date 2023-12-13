import React, { useState, useEffect } from "react";

import styles from "./contact-form-section.module.scss";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

export default function ContactFormSection(props) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  useEffect(() => {}, []);

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    setFormData({ ...formData, [name]: value });
  }

  async function submitForm(event) {
    event.preventDefault();
    try {
      const result = await fetch(
        "https://www.greatfrontend.com/api/questions/contact-form",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      ).then((res) => res.json());
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  function resetForm() {
    setFormData(INITIAL_STATE);
  }

  return (
    <main className={styles.contact_form_section_container}>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Send</button>
        <button type="button" onClick={resetForm}>
          Cancel
        </button>
      </form>
    </main>
  );
}
