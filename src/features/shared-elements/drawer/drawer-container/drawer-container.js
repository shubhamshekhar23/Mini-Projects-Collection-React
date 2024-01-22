import React, { useState, useEffect } from "react";

import styles from "./drawer-container.module.scss";

export default function DrawerContainer({ direction = "right", onClose }) {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {}, []);

  return (
    <main>
      {isShow && (
        <>
          <div
            className={styles.overlay}
            onClick={() => {
              setIsShow(false) || onClose();
            }}
          ></div>
          <section className={styles.drawer_container_container}>
            DrawerContainer Component
          </section>
        </>
      )}
    </main>
  );
}
