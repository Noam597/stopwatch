import React, { useState,useEffect } from "react";
import styles from "./App.module.css";
import Clock from "./components/clock/Clock";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import StopWatch from "./components/stopwatch/StopWatch";

function App() {
  const [watch, setWatch] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <>
      <div className={styles.app}>
        <Header
          watch={watch}
          onClick={() => {
            setWatch(!watch);
          }}
        />
        {!watch ? <Clock /> : <StopWatch />}
      </div>
      <Footer />
    </>
  );
}

export default App;
