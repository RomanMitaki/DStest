import React from "react";
import styles from "./CatalogPage.module.css";
import Category from "../../components/Category/Category";

const CatalogPage = () => {
  return (
    <main className={styles.catalog__page}>
      <Category />
      <Category />
      <Category />
    </main>
  );
};

export default CatalogPage;
