import React, { useState, useEffect } from "react";

import styles from "./tabs-container.module.scss";
import TabScreenOne from "../tab-screen-one/tab-screen-one";
import TabScreenTwo from "../tab-screen-two/tab-screen-two";
import TabScreenThree from "../tab-screen-three/tab-screen-three";

const SCREEN_TYPE = {
  screenOne: "screenOne",
  screenTwo: "screenTwo",
  screenThree: "screenThree",
};

export default function TabsContainer(props) {
  const [activeScreen, setActiveScreen] = useState(SCREEN_TYPE.screenOne);

  useEffect(() => {}, []);

  function handleCLick(e) {
    setActiveScreen(e);
  }

  function getBtnStyles(type) {
    if (type == activeScreen) {
      return styles.active_btn;
    }
  }

  return (
    <main className={styles.tabs_container_container}>
      <div className={styles.tab_group}>
        <button
          className={getBtnStyles(SCREEN_TYPE.screenOne)}
          onClick={() => handleCLick(SCREEN_TYPE.screenOne)}
        >
          Screen-One
        </button>
        <button
          className={getBtnStyles(SCREEN_TYPE.screenTwo)}
          onClick={() => handleCLick("screenTwo")}
        >
          Screen-Two
        </button>
        <button
          className={getBtnStyles(SCREEN_TYPE.screenThree)}
          onClick={() => handleCLick("screenThree")}
        >
          Screen-Three
        </button>
      </div>

      <div className={styles.content}>
        {activeScreen == "screenOne" && <TabScreenOne />}
        {activeScreen == "screenTwo" && <TabScreenTwo />}
        {activeScreen == "screenThree" && <TabScreenThree />}
      </div>
    </main>
  );
}
