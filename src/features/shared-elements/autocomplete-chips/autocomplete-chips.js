import React, { useState, useEffect } from "react";

import styles from "./autocomplete-chips.module.scss";
import AutocompleteChipsContainer from "./autocomplete-chips-container/autocomplete-chips-container";

const moviesList = [
  { id: 1, label: "The Shawshank Redemption" },
  { id: 3, label: "The Dark Knight" },
  { id: 14, label: "The Godfather" },
  { id: 16, label: "Pulp Fiction" },
  { id: 17, label: "Schindler's List" },
  { id: 18, label: "The Lord of the Rings: The Return of the King" },
  { id: 19, label: "Forrest Gump" },
  { id: 20, label: "The Matrix" },
  { id: 21, label: "Inception" },
  { id: 22, label: "Titanic" },
  { id: 23, label: "The Silence of the Lambs" },
  { id: 24, label: "Fight Club" },
  { id: 25, label: "The Departed" },
  { id: 26, label: "The Shining" },
  { id: 27, label: "The Grand Budapest Hotel" },
  { id: 28, label: "The Social Network" },
  { id: 29, label: "Inglourious Basterds" },
  { id: 30, label: "The Big Lebowski" },
];

export default function AutocompleteChips(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.autocomplete_chips_container}>
      <AutocompleteChipsContainer
        data={moviesList}
        placeholder={"Select Movies.."}
      />
    </main>
  );
}
