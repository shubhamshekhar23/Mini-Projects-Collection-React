import React, { useState, useEffect } from "react";

import styles from "./job-board.module.scss";
import JobBoardContainer from "./job-board-container/job-board-container";

export default function JobBoard(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.job_board_container}>
      <JobBoardContainer />
    </main>
  );
}
