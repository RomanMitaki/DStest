import React from "react";
import styles from "./Category.module.css";
import CatalogCard from "../CatalogCard/CatalogCard";
import { TProductMapped } from "../../utils/types";
import { useAppSelector } from "../../services/hooks/useAppSelector";
import Loader from "../Loader/Loader";

type TCategoryProps = {
  name: string;
};
const Category = (props: TCategoryProps) => {
  const { products } = useAppSelector((store) => store.products);

  return (
    <section className={styles.category__container}>
      <h2 className={styles.category__title}>{props.name}</h2>
      <div className={styles.category__cardContainer}>
        {products.length &&
          products
            .filter((product) => product.category === props.name)
            .map((product) => <CatalogCard key={product.id} info={product} />)}
      </div>
    </section>
  );
};

export default Category;
