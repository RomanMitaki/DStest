import React, { useEffect, useMemo, useState } from "react";
import styles from "./CartPage.module.css";
import CartCard from "../../components/CartCard/CartCard";
import { useAppSelector } from "../../services/hooks/useAppSelector";
import { TProductMapped } from "../../utils/types";
import { getCartProducts } from "../../utils/getCartProducts";

const CartPage = () => {
  const { products } = useAppSelector((store) => store.products);
  const [cartProducts, setCartProducts] = useState<TProductMapped[]>([]);

  useEffect(() => {
    setCartProducts(getCartProducts(products));
  }, [products]);

  const totalPrice = useMemo(() => {
    return products
      .reduce((acc, item) => acc + item.price * item.qty, 0)
      .toFixed(2);
  }, [products]);

  return (
    <main className={styles.cart__page}>
      <h2>Корзина</h2>
      <section className={styles.cart__container}>
        <div className={styles.product__container}>
          {!cartProducts.length ? (
            <p>Корзина пуста</p>
          ) : (
            cartProducts.map((product) => (
              <CartCard key={product.id} info={product} />
            ))
          )}
        </div>
        <div className={styles.total__container}>
          <div className={styles.total__priceContainer}>
            <p className={styles.total__text}>ИТОГО</p>
            <p className={styles.total__price}>
              ₽ {Number(totalPrice).toLocaleString("ru-RU")}
            </p>
          </div>
          <button className={styles.total__btn}>Перейти к оформлению</button>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
