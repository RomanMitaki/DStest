import React from "react";
import styles from "./CartPage.module.css";
import CartCard from "../../components/CartCard/CartCard";

const CartPage = () => {
  return (
    <main className={styles.cart__page}>
      <h2>Корзина</h2>
      <section className={styles.cart__container}>
        <div className={styles.product__container}>
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
        <div className={styles.total__container}>
          <div className={styles.total__priceContainer}>
            <p className={styles.total__text}>ИТОГО</p>
            <p className={styles.total__price}>₽ 1000</p>
          </div>
          <button className={styles.total__btn}>Перейти к оформлению</button>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
