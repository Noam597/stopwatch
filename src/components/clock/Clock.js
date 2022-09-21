import React, { useState, useEffect } from "react";
import styles from "./clock.module.css";
const Clock = () => {
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      let time = new Date();
      setClock(time.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <div className={styles.clock}>
        <div className={styles.clockShape}>
          <h1>{clock}</h1>
        </div>
      </div>
    </>
  );
};

export default Clock;
