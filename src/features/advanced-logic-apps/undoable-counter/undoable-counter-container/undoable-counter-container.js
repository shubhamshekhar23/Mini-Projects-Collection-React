import React, { useState, useEffect } from "react";

import styles from "./undoable-counter-container.module.scss";

export default function UndoableCounterContainer(props) {
  const [result, setResult] = useState(0);
  const [opStack, setOpStack] = useState([]);
  const [undoStack, setUndoStack] = useState([]);

  useEffect(() => {
    if (opStack[0]) {
      setResult(opStack[0].newValue);
    } else {
      setResult(0);
    }
  }, [opStack]);

  function calculate(type) {
    const intialResult = result;
    let finalResult = result;
    if (type == "/2") finalResult = intialResult / 2;
    if (type == "-1") finalResult = intialResult - 1;
    if (type == "+1") finalResult = intialResult + 1;
    if (type == "x2") finalResult = intialResult * 2;

    setResult(finalResult);
    updateOpStack(type, intialResult, finalResult);
  }

  function updateOpStack(op, oldValue, newValue) {
    let temp = [...opStack];
    temp = [{ op, oldValue, newValue }, ...temp];

    setOpStack(temp);
  }

  function undoOperation(params) {
    let temp = [...opStack];
    const undoItem = temp.shift();
    setOpStack(temp);
    setUndoStack([undoItem, ...undoStack]);
    setResult(undoItem.newValue);
  }

  function redoOperation(params) {
    let temp = [...undoStack];
    const undoItem = temp.shift();
    setUndoStack(temp);
    setOpStack([undoItem, ...opStack]);
    setResult(undoItem.newValue);
  }

  function resetOperations(params) {
    setUndoStack([]);
    setOpStack([]);
    setResult(0);
  }

  return (
    <main className={styles.undoable_counter_container_container}>
      <div className={styles.actin_section}>
        <button onClick={undoOperation}>Undo</button>
        <button disabled={undoStack.length == 0} onClick={redoOperation}>
          Redo
        </button>
        <button onClick={resetOperations}>Reset</button>
      </div>

      {/* Action display */}
      <div className={styles.action_display}>
        <button onClick={() => calculate("/2")}>/2</button>
        <button onClick={() => calculate("-1")}>-1</button>
        <span>{result}</span>
        <button onClick={() => calculate("+1")}>+1</button>
        <button onClick={() => calculate("x2")}>x2</button>
      </div>
      {/* table operation */}
      <table>
        <tbody>
          <tr>
            <th>Op</th>
            <th>Old</th>
            <th>New</th>
          </tr>
          {opStack.map((item, index) => (
            <tr key={index}>
              <td>{item.op}</td>
              <td>{item.oldValue}</td>
              <td>{item.newValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
