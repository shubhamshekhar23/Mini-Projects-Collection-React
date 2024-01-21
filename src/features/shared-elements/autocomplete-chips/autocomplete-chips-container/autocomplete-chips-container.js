import React, { useState, useEffect, useRef } from "react";

import styles from "./autocomplete-chips-container.module.scss";

export default function AutocompleteChipsContainer({ data, placeholder }) {
  const [selectedChips, setSelectedChips] = useState([]);
  const [typedText, setTypedText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    console.log(selectedChips);
  }, [selectedChips]);

  const handleDeselectChip = (params) => {
    const newList = selectedChips.filter((item) => item.id !== params.id);
    setSelectedChips(newList);
  };

  const selectedChipsElements = selectedChips.map((item, index) => {
    return (
      <span key={item.id} className={styles.chip_element}>
        {item.label}
        <span
          className={styles.cross_item}
          onClick={() => handleDeselectChip(item)}
        >
          {"╳"}
        </span>
      </span>
    );
  });

  const handleItemClick = (item) => {
    const result = new Set([...selectedChips, item]);
    setSelectedChips([...result]);
    inputRef.current.focus();
    setIsOpen(false);
  };

  const filteredItems = data.filter((item) =>
    item.label.toLowerCase().includes(typedText.toLowerCase())
  );

  const isAlreadySelected = (param) => {
    return selectedChips.findIndex((item) => item.id == param.id) != -1;
  };

  const getClassForItem = (item) => {
    let arr = [styles.dropdown_item];
    if (isAlreadySelected(item)) {
      arr.push(styles.selected_item);
    }
    return arr.join(" ");
  };

  const dropwdownListFilteredElements = filteredItems.map((item, index) => {
    return (
      <div
        key={item.id}
        className={getClassForItem(item)}
        onClick={() => handleItemClick(item)}
      >
        {item.label}
      </div>
    );
  });

  const handleChange = (event) => {
    setTypedText(event.target.value);
  };

  return (
    <main className={styles.autocomplete_chips_container_container}>
      <div className={styles.chips_input_box}>
        <input
          type="text"
          placeholder={placeholder}
          onClick={() => setIsOpen(true)}
          onChange={(e) => handleChange(e)}
          onFocus={() => setIsOpen(true)}
          ref={inputRef}
        />
        {selectedChipsElements}
      </div>
      {isOpen && (
        <div className={styles.dropdown_container}>
          {dropwdownListFilteredElements}
        </div>
      )}
    </main>
  );
}
