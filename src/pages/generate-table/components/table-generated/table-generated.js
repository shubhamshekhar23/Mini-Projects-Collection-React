import React, { useState, useEffect } from "react";

import styles from "./table-generated.module.scss";

export default function TableGenerated({ rows, columns }) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  function getColumnData(rowNum) {
    let colsArr = new Array(parseInt(columns)).fill(1);
    let count = 0;
    let result = colsArr.map((item, index) => {
      const num = (rowNum - 1) * columns;
      count++;
      return <td key={index}>{num + count}</td>;
    });

    if (rowNum % 2 == 0) {
      result.reverse();
    }
    return result;
  }

  function getTableBodyRows() {
    let rowsArr = new Array(parseInt(rows)).fill(1);
    return rowsArr.map((item, index) => {
      return <tr key={index}>{getColumnData(index + 1)}</tr>;
    });
  }

  return (
    <main className={styles.table_generated_container}>
      <table>
        <tbody>{getTableBodyRows()}</tbody>
      </table>
    </main>
  );
}
