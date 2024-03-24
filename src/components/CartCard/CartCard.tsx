import styles from "./CartCard.module.css";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { TProductMapped } from "../../utils/types";
import { useAppDispatch } from "../../services/hooks/useAppDispatch";
import { useMemo } from "react";
import {
  decreaseItem,
  deleteItem,
  increaseItem,
} from "../../services/slices/products";

type TCartCardProps = {
  info: TProductMapped;
};
const CartCard = (props: TCartCardProps) => {
  const { image, price, qty, title, id } = props.info;
  const dispatch = useAppDispatch();

  const totalItemsPrice = useMemo(() => {
    return (price * qty).toFixed(2);
  }, [qty]);

  const onDelete = () => {
    dispatch(deleteItem(id));
  };
  const decrease = () => {
    dispatch(decreaseItem(id));
  };
  const increase = () => {
    dispatch(increaseItem(id));
  };

  return (
    <div className={styles.card__container}>
      <div className={styles.card__imgContainer}>
        <img className={styles.image} src={image} alt="product's image" />
        <div className={styles.btn__container}>
          <button
            disabled={qty === 1}
            onClick={decrease}
            className={`${styles.btn} ${qty === 1 ? styles.disabled : ""}`}
          >
            -
          </button>
          <p>{qty}</p>
          <button
            disabled={qty === 50}
            onClick={increase}
            className={`${styles.btn} ${qty === 50 ? styles.disabled : ""}`}
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.card__priceContainer}>
        <p className={styles.card__title}>{title}</p>
        <p className={styles.card__price}>{price.toLocaleString("ru-RU")} ₽</p>
      </div>
      <div className={styles.card__totalContainer}>
        <button onClick={onDelete} className={styles.trash__btn}>
          <TrashIcon />
        </button>
        <p className={styles.card__totalPrice}>
          {Number(totalItemsPrice).toLocaleString("ru-RU")} ₽
        </p>
      </div>
    </div>
  );
};

export default CartCard;
