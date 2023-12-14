import React, { useState, useEffect } from "react";

import styles from "./star-rating-list.module.scss";
import StarItem from "../star-item/star-item";

export default function StarRatingList(props) {
  const [state, setState] = useState([]);
  const [hoverState, setHoverState] = useState([]);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const arr = new Array(parseInt(props.num)).fill(false);
    setState(arr);
  }, []);

  function handleClick(id) {
    const allTrue = new Array(id + 1).fill(true);
    const allFalse = new Array(state.length - id - 1).fill(false);
    setState([...allTrue, ...allFalse]);
  }

  function mouseEnter(id) {
    const allTrue = new Array(id + 1).fill(true);
    const allFalse = new Array(state.length - id - 1).fill(false);
    setHoverState([...allTrue, ...allFalse]);
    setIsHover(true);
  }

  function mouseLeave(id) {
    setHoverState([]);
    setIsHover(false);
  }

  const correctState = isHover ? hoverState : state;

  return (
    <main className={styles.star_rating_list_container}>
      {correctState.map((item, index) => (
        <StarItem
          key={index}
          id={index}
          active={item}
          onClick={handleClick}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        />
      ))}
    </main>
  );
}
