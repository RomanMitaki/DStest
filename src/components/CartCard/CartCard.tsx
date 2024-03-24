import styles from "./CartCard.module.css";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
const CartCard = () => {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__imgContainer}>
        <img
          className={styles.image}
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product's image"
        />
        <div className={styles.btn__container}>
          <button className={styles.btn}>-</button>
          <p>1</p>
          <button className={styles.btn}>+</button>
        </div>
      </div>
      <div className={styles.card__priceContainer}>
        <p className={styles.card__title}>
          dfghbrthrehtregerhrthbrtntdmdytmtyum
        </p>
        <p className={styles.card__price}>2971 ₽</p>
      </div>
      <div className={styles.card__totalContainer}>
        <button className={styles.trash__btn}>
          <TrashIcon />
        </button>
        <p className={styles.card__totalPrice}>299971 ₽</p>
      </div>
    </div>
  );
};

export default CartCard;
