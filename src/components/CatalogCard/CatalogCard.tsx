import React, { useState } from "react";
import styles from "./CatalogCard.module.css";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import { TProductMapped } from "../../utils/types";
import { useAppDispatch } from "../../services/hooks/useAppDispatch";
import { increaseItem } from "../../services/slices/products";

type TCatalogCardProps = {
  info: TProductMapped;
};
const CatalogCard = (props: TCatalogCardProps) => {
  const { title, price, image, rate, id, qty } = props.info;
  const dispatch = useAppDispatch();

  const increase = () => {
    dispatch(increaseItem(id));
  };

  return (
    <main className={styles.card__container}>
      <div>
        <img className={styles.image} src={image} alt="product's image" />
      </div>
      <div className={styles.price__container}>
        <p className={styles.text}>{title}</p>
        <p className={styles.price}>{price} ₽</p>
      </div>
      <div className={styles.btn__container}>
        <div className={styles.star__container}>
          <StarIcon />
          <p className={styles.star__rating}>{rate}</p>
        </div>
        <button
          disabled={qty > 0}
          onClick={increase}
          className={`${styles.btn} ${qty > 0 ? styles.disabled : ""}`}
        >
          Купить
        </button>
      </div>
    </main>
  );
};

export default CatalogCard;
