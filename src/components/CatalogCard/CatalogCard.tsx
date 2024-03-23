import React from "react";
import styles from "./CatalocCard.module.css";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";

const CatalogCard = () => {
  return (
    <main className={styles.card__container}>
      <div>
        <img
          className={styles.image}
          src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
        />
      </div>
      <div className={styles.price__container}>
        <p className={styles.text}>Goodsdgerrtenhtymtymtyum,y,</p>
        <p className={styles.price}>1000 ₽</p>
      </div>
      <div className={styles.btn__container}>
        <div className={styles.star__container}>
          <StarIcon />
          <p className={styles.star__rating}>4.7</p>
        </div>
        <button className={styles.btn}>Купить</button>
      </div>
    </main>
  );
};

export default CatalogCard;
