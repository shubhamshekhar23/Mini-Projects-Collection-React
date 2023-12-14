import React, { useState, useEffect } from "react";

import styles from "./star-rating.module.scss";
import StarRatingContainer from "./star-rating-container/star-rating-container";

export default function StarRating(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.star_rating_container}>
      <StarRatingContainer />
    </main>
  );
}
