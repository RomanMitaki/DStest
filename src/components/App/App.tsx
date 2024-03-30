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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <Header />
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        toggle
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at aut,
        autem blanditiis deserunt doloremque dolores error eum, facere harum
        illo laudantium nisi perferendis recusandae repudiandae saepe sit
        temporibus vitae?
      </Modal>
      <div className={styles.content}>
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
