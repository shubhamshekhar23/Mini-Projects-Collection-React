import React, { useState, useEffect } from "react";

import styles from "./job-post-item.module.scss";

export default function JobPostItem(props) {
  return (
    <main className={styles.job_post_item_container}>
      {props.url && (
        <a href={props.url ? props.url : "#"} target="_blank">
          <h5>{props.title}</h5>
        </a>
      )}
      {!props.url && <h5>{props.title}</h5>}
      <p>
        By : {props.by}. {new Date(props.time).toLocaleDateString()},
        {new Date(props.time).toLocaleTimeString()}
      </p>
    </main>
  );
}
