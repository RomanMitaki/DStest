import "../../assets/styles/index.css";
import styles from "./App.module.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppRouter from "../../utils/providers/AppRouter";

function App() {
  return (
    <div className="app">
      <Header />
      <div className={styles.content}>
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
