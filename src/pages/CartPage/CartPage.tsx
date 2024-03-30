import React, { useEffect, useMemo, useState } from "react";
import styles from "./CartPage.module.css";
import CartCard from "../../components/CartCard/CartCard";
import { useAppSelector } from "../../services/hooks/useAppSelector";
import { TProductMapped } from "../../utils/types";
import { getCartProducts } from "../../utils/getCartProducts";
import { Modal } from "../../components/Modal/Modal";

const CartPage = () => {
  const { products } = useAppSelector((store) => store.products);
  const [cartProducts, setCartProducts] = useState<TProductMapped[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCartProducts(getCartProducts(products));
  }, [products]);

  const totalPrice = useMemo(() => {
    return products
      .reduce((acc, item) => acc + item.price * item.qty, 0)
      .toFixed(2);
  }, [products]);

  return (
    <>
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
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className={styles.total__btn}
            >
              Перейти к оформлению
            </button>
          </div>
        </section>
      </main>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        Здесь можно будет осуществить оплату заказа.
      </Modal>
    </>
  );
};

export default CartPage;
