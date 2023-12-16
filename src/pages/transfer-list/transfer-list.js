import React, { useState, useEffect } from "react";

import styles from "./transfer-list.module.scss";
import TransferListContainer from "./transfer-list-container/transfer-list-container";

export default function TransferList(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.transfer_list_container}>
      <TransferListContainer />
    </main>
  );
}
