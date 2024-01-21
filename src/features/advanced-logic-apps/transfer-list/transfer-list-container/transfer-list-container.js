import React, { useState, useEffect } from "react";

import styles from "./transfer-list-container.module.scss";
import btnActionService from "./services/btn-action.service";
import btnDisableService from "./services/btn-disable.service";
import checkboxHandlerService from "./services/checkbox-handler.service";

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

  const options = {
    leftList,
    rightList,
    setLeftList,
    setRightList,
  };

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
                onChange={(e) =>
                  checkboxHandlerService.handleLeftCheckbox(e, item.id, options)
                }
              />
              <label htmlFor={item.label}>{item.label}</label>
            </div>
          );
        })}
      </div>

      {/* middle action */}
      <div className={styles.action}>
        <button
          disabled={btnDisableService.isAllLeftDisabled(options)}
          onClick={() => btnActionService.allLeft(options)}
        >
          {"<<"}
        </button>
        <button
          disabled={btnDisableService.isCheckedLeftDisabled(options)}
          onClick={() => btnActionService.checkedLeft(options)}
        >
          {"<"}
        </button>
        <button
          disabled={btnDisableService.isCheckedRightDisabled(options)}
          onClick={() => btnActionService.checkedRight(options)}
        >
          {">"}
        </button>
        <button
          disabled={btnDisableService.isAllRightDisabled(options)}
          onClick={() => btnActionService.allRight(options)}
        >
          {">>"}
        </button>
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
                onChange={(e) =>
                  checkboxHandlerService.handleRightCheckbox(
                    e,
                    item.id,
                    options
                  )
                }
              />
              <label htmlFor={item.label}>{item.label}</label>
            </div>
          );
        })}
      </div>
    </main>
  );
}
