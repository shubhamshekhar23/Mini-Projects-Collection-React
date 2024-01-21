import React, { useState, useEffect } from "react";

import styles from "./tweet-section.module.scss";
import TweetIcon from "../tweet-icon/tweet-icon";

export default function TweetSection(props) {
  const [state, setState] = useState({});

  const data = {
    img: "https://xsgames.co/randomusers/avatar.php?g=male",
    name: "John Doe",
    userId: "@johndoe",
    date: "Dec 25",
    content:
      "To them that have expressed their kindness, their fortitude, courage and their wishes for John wick, Neo Anserson... my unending gratitude and love",
    comment: 1093,
    like: 300,
    repost: 15,
  };

  useEffect(() => {}, []);

  return (
    <main className={styles.tweet_section_container}>
      <img src={data.img} alt="User" />
      <div>
        <div className={styles.header_row}>
          <span className={styles.tweet_name}>{data.name}</span>
          <span className={styles.tweet_id_date}>{data.userId}</span>
          <span className={styles.tweet_id_date}>{data.date}</span>
        </div>
        <p>{data.content}</p>
        <div className={styles.tweet_action}>
          <div>
            <TweetIcon comment={true} /> {data.comment}
          </div>
          <div>
            <TweetIcon repost={true} />
            {data.repost}
          </div>
          <div>
            <TweetIcon like={true} />
            {data.like}
          </div>
          <div>
            <TweetIcon share={true} />
          </div>
        </div>
      </div>
    </main>
  );
}
