import "../../assets/styles/index.css";
import styles from "./App.module.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppRouter from "../../utils/providers/AppRouter";
import { renderProducts } from "../../services/actions/products";
import { useAppDispatch } from "../../services/hooks/useAppDispatch";
import { Modal } from "../Modal/Modal";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(renderProducts());
  }, [dispatch]);

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
