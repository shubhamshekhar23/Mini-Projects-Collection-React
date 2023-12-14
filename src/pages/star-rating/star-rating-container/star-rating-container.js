import React, { useState, useEffect } from "react";

import styles from "./star-rating-container.module.scss";
import StarItem from "../star-item/star-item";
import StarRatingList from "../star-rating-list/star-rating-list";

export default function StarRatingContainer(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.star_rating_container_container}>
      <StarRatingList num={6} />
    </main>
  );
}
