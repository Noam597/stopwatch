import React from "react";
import styles from "./header.module.css";
const Header = ({ watch, onClick }) => {
  return (
    <header className={styles.title}>
      <div className={styles.switch}>
        <button onClick={onClick}>{!watch ? "stopwatch" : "clock"}</button>
      </div>
    </header>
  );
};

export default Header;
