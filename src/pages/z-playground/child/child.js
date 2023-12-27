import React, { useState, useEffect, useContext } from "react";

import styles from "./child.module.scss";
import { DataContext } from "../parent/parent";

export default function Child(props) {
  const { state, setState } = useContext(DataContext);

  useEffect(() => {
    setTimeout(() => {
      setState("I am set by Child");
    }, 2000);
  }, []);

  return <main className={styles.child_container}>{state + ""}</main>;
}
