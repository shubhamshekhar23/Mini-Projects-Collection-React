import React, { useState, useEffect, useRef } from "react";

import styles from "./job-board-container.module.scss";
import JobPostItem from "../job-post-item/job-post-item";

const LIMIT = 6;

export default function JobBoardContainer(props) {
  const [jobList, setJobList] = useState([]);
  const [jobIdList, setJobIdList] = useState([]);
  const [skip, setSkip] = useState(0);

  const limit = useRef(LIMIT);

  useEffect(() => {
    if (jobIdList.length == 0) return;
    fetchAndUpdateJobPostList();
  }, [jobIdList, skip]);

  async function fetchAndUpdateJobList() {
    const result = await fetch(
      "https://hacker-news.firebaseio.com/v0/jobstories.json"
    ).then((res) => res.json());
    setJobIdList(result);
  }

  async function fetchAndUpdateJobPostList() {
    let currIdList = getIdListFromSkipAndLimit();

    let requestList = Promise.all(
      currIdList.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          (res) => res.json()
        )
      )
    );

    const result = await requestList;
    setJobList([...jobList, ...result]);
  }

  function getIdListFromSkipAndLimit() {
    return jobIdList.slice(skip, skip + limit.current);
  }

  useEffect(() => {
    fetchAndUpdateJobList();
  }, []);

  function loadMore() {
    setSkip(skip + 6);
  }

  return (
    <main className={styles.job_board_container_container}>
      <h3>Job Board</h3>
      {jobList.map((item, index) => (
        <div key={item.id}>
          <JobPostItem {...item} />
        </div>
      ))}
      <button
        style={{
          display: skip + limit.current >= jobIdList.length ? "none" : "block",
        }}
        onClick={loadMore}
      >
        Load more Jobs
      </button>
    </main>
  );
}
