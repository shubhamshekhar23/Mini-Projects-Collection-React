import React, { useState, useEffect } from "react";

import styles from "./generate-table-container.module.scss";
import GenerateTableForm from "../generate-table-form/generate-table-form";
import TableGenerated from "../table-generated/table-generated";

export default function GenerateTableContainer(props) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {}, []);

  function handleSubmit(formData) {
    setIsSubmit(true);
    setFormData(formData);
  }

  return (
    <main className={styles.generate_table_container_container}>
      <GenerateTableForm handleSubmit={handleSubmit} />
      {isSubmit && <TableGenerated {...formData} />}
    </main>
  );
}
