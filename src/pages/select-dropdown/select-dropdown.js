import React, { useState, useEffect } from "react";

import styles from "./select-dropdown.module.scss";
import SelectDropdownContainer from "./select-dropdown-container/select-dropdown-container";

export default function SelectDropdown(props) {
  const [state, setState] = useState([
    {
      label: "John",
      value: "john",
    },
    {
      label: "Robert",
      value: "robert",
    },
    {
      label: "Doe",
      value: "doe",
    },
    {
      label: "Ross",
      value: "ross",
    },
  ]);

  useEffect(() => {}, []);

  return (
    <main className={styles.select_dropdown_container}>
      <SelectDropdownContainer placeholder={"Select person"} data={state} />
    </main>
  );
}
