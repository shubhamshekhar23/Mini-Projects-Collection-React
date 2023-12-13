import React, { useState, useEffect } from "react";

import styles from "./generate-table-form.module.scss";

const INTIAL_state = {
  rows: "",
  columns: "",
};

export default function GenerateTableForm(props) {
  const [form, setForm] = useState(INTIAL_state);

  useEffect(() => {}, []);

  function handleSubmit(e) {
    e.preventDefault();
    setForm({ ...form });
    props.handleSubmit(form);
  }

  return (
    <main className={styles.generate_table_form_container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rows">Rows : </label>
          <input
            type="number"
            name="rows"
            value={form.rows}
            onChange={(e) => setForm({ ...form, rows: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="columns">Columns : </label>
          <input
            type="number"
            name="columns"
            value={form.columns}
            onChange={(e) => setForm({ ...form, columns: e.target.value })}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
