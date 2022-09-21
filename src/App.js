import React, { useState } from "react";
import styles from "./App.module.css";
import Clock from "./components/clock/Clock";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import StopWatch from "./components/stopwatch/StopWatch";

function App() {
  const [watch, setWatch] = useState(false);
  return (
    <>
      <div className={styles.app}>
        <Header />
        {!watch ? <Clock /> : <StopWatch />}
        <div className={styles.switch}>
          <button
            onClick={() => {
              setWatch(!watch);
            }}
          >
            {!watch ? "stopwatch" : "clock"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
