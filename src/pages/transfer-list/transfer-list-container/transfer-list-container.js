import React, { useState, useEffect } from "react";

import styles from "./transfer-list-container.module.scss";

const LEFT_ITEMS = ["HTML", "css", "javascript", "typescript"];
const RIGHT_ITEMS = ["React", "Angular", "Vue", "Svelte"];

export default function TransferListContainer(props) {
  const [leftList, setLeftList] = useState([]);
  const [rightList, setRightList] = useState([]);

  useEffect(() => {
    /* initailizse items */
    setLeftList(
      LEFT_ITEMS.map((item, index) => ({
        id: index,
        checked: false,
        label: item,
      }))
    );
    setRightList(
      RIGHT_ITEMS.map((item, index) => ({
        id: index + LEFT_ITEMS.length,
        checked: false,
        label: item,
      }))
    );
  }, []);

  function handleLeftCheckbox(e, id) {
    const checked = e.target.checked;
    const temp = [...leftList];
    let temp2 = temp.map((item) => {
      if (item.id == id) {
        item.checked = checked;
      }
      return item;
    });
    setLeftList(temp);
  }

  function handleRightCheckbox(e, id) {
    const checked = e.target.checked;
    const temp = [...rightList];
    let temp2 = temp.map((item) => {
      if (item.id == id) {
        item.checked = checked;
      }
      return item;
    });
    setRightList(temp);
  }

  function allLeft(params) {
    setLeftList([...leftList, ...rightList]);
    setRightList([]);
  }

  function allRight(params) {
    setRightList([...rightList, ...leftList]);
    setLeftList([]);
  }

  function checkedLeft(params) {
    let checkedItemsInRIght = rightList.filter((item) => item.checked);
    let nonCheckedItemsInRIght = rightList.filter((item) => !item.checked);
    setLeftList([...leftList, ...checkedItemsInRIght]);
    setRightList(nonCheckedItemsInRIght);
  }
  function checkedRight(params) {
    let checkedItemsInLeft = leftList.filter((item) => item.checked);
    let nonCheckedItemsInLeft = leftList.filter((item) => !item.checked);
    setRightList([...rightList, ...checkedItemsInLeft]);
    setLeftList(nonCheckedItemsInLeft);
  }

  return (
    <main className={styles.transfer_list_container_container}>
      {/* left list */}
      <div className={styles.item_list}>
        {leftList.map((item) => {
          return (
            <div key={item.id} className={styles.form_field}>
              <input
                type="checkbox"
                name={item.label}
                checked={item.checked}
                onChange={(e) => handleLeftCheckbox(e, item.id)}
              />
              <label htmlFor={item.label}>{item.label}</label>
            </div>
          );
        })}
      </div>

      {/* middle action */}
      <div className={styles.action}>
        <button onClick={allLeft}>{"<<"}</button>
        <button onClick={checkedLeft}>{"<"}</button>
        <button onClick={checkedRight}>{">"}</button>
        <button onClick={allRight}>{">>"}</button>
      </div>

      {/* right list */}
      <div className={styles.item_list}>
        {rightList.map((item) => {
          return (
            <div key={item.id} className={styles.form_field}>
              <input
                type="checkbox"
                name={item.label}
                checked={item.checked}
                onChange={(e) => handleRightCheckbox(e, item.id)}
              />
              <label htmlFor={item.label}>{item.label}</label>
            </div>
          );
        })}
      </div>
    </main>
  );
}
