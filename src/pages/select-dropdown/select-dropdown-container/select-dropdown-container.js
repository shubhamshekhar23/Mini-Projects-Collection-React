import React, { useState, useEffect, useRef } from "react";

import styles from "./select-dropdown-container.module.scss";

export default function SelectDropdownContainer({ placeholder, data }) {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownref = useRef();

  useEffect(() => {
    const closeDropdown = (event) => {
      if (event.target.contains(dropdownref.current)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  const handleSelectClick = (params) => {
    setValue(params);
    setIsOpen(false);
  };

  const openDropdown = (params) => {
    setIsOpen(!isOpen);
  };

  const dropdownElement = data.map((item, index) => {
    return (
      <li key={item.value} onClick={() => handleSelectClick(item.label)}>
        {item.label}
      </li>
    );
  });

  const getClassForBox = () => {
    let arr = [styles.main_box];
    isOpen ? arr.push(styles.open_box) : "";
    return arr.join(" ");
  };

  return (
    <main
      className={styles.select_dropdown_container_container}
      ref={dropdownref}
    >
      <div className={getClassForBox()} onClick={openDropdown}>
        {!value && <span>{placeholder}</span>}
        {value && <span>{value}</span>}
      </div>
      {isOpen && <div className={styles.dropdown}>{dropdownElement}</div>}
    </main>
  );
}
