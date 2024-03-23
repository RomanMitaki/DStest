import React, { useEffect, useState } from "react";
import styles from "./CatalogPage.module.css";
import Category from "../../components/Category/Category";
import { useAppDispatch } from "../../services/hooks/useAppDispatch";
import { useAppSelector } from "../../services/hooks/useAppSelector";
import { renderProducts } from "../../services/actions/products";
import Loader from "../../components/Loader/Loader";
import { getCategories } from "../../utils/getCategories";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector((store) => store.products);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    dispatch(renderProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length) {
      const cat = getCategories(products);
      setCategories(cat);
    }
  }, [products, dispatch]);

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
