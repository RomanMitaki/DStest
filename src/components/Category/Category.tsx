import React from "react";
import styles from "./Category.module.css";
import CatalogCard from "../CatalogCard/CatalogCard";

const Category = () => {
  return (
    <section className={styles.category__container}>
      <h2 className={styles.category__title}>Category</h2>
      <div className={styles.category__cardContainer}>
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
      </div>
    </section>
  );
};

export default Category;
