import React, { useState, useEffect } from "react";

import styles from "./file-uploader.module.scss";
import FileUploaderContainer from "./file-uploader-container/file-uploader-container";

export default function FileUploader(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.file_uploader_container}>
      <FileUploaderContainer />
    </main>
  );
}
