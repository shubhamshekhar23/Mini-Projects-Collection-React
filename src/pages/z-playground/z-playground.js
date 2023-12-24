import React, { useState, useEffect } from 'react';

import styles from './z-playground.module.scss';

export default function ZPlayground(props) {
  const [state, setState] = useState({});

  useEffect(() => {

  }, []);

  return (
    <main className={ styles.z_playground_container }>
      ZPlayground Component
    </main>
  );
}