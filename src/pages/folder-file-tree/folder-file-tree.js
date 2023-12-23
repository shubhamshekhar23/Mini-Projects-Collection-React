import React, { useState, useEffect } from "react";

import styles from "./folder-file-tree.module.scss";
import FolderFileTreeContainer from "./folder-file-tree-container/folder-file-tree-container";

export default function FolderFileTree(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.folder_file_tree_container}>
      <FolderFileTreeContainer />
    </main>
  );
}
