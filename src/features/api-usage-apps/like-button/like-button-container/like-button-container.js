import React, { useState, useEffect } from "react";

import styles from "./like-button-container.module.scss";
import IconItem from "../icon-item/icon-item";

export default function LikeButtonContainer(props) {
  const [isLike, setIsLike] = useState(false); // like or unlike or loading
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);

  async function handleClick() {
    try {
      setIsLoading(true);
      /* below api has 50% chance of succeding and failing */
      let result = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: isLike ? "like" : "unlike",
          }),
        }
      );
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setIsLoading(false);
      setIsLike(!isLike);
    } catch (error) {
      setIsLoading(false);
    }
  }

  const getName = () => {
    if (isLoading) return "spinner";
    return "heart";
  };

  function getClassname() {
    if (isLike) return styles.like_btn;
    return styles.unlike_btn;
  }

  return (
    <main className={styles.like_button_container_container}>
      <button onClick={handleClick} className={getClassname()}>
        <IconItem name={getName()} />
        Like
      </button>
    </main>
  );
}
