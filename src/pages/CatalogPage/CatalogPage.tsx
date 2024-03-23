import React, { useEffect, useState } from "react";
import styles from "./CatalogPage.module.css";
import Category from "../../components/Category/Category";
import { useAppSelector } from "../../services/hooks/useAppSelector";
import Loader from "../../components/Loader/Loader";
import { getCategories } from "../../utils/getCategories";

const CatalogPage = () => {
  const { products, isLoading } = useAppSelector((store) => store.products);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (products.length) {
      const cat = getCategories(products);
      setCategories(cat);
    }
  }, [products]);

  return (
    <main className={styles.catalog__page}>
      {isLoading ? (
        <Loader />
      ) : (
        categories.length &&
        categories.map((category, idx) => (
          <Category key={idx} name={category} />
        ))
      )}
    </main>
  );
};

export default CatalogPage;
