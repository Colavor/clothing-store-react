import type { CartItem as CartItemType } from "../../store/useCartStore";
import styles from "./styles.module.css";

interface CartItemProps {
  item: CartItemType;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) => {
  return (
    <article className={styles.cartItem}>
      <img className={styles.image} src={item.thumbnail} alt={item.title} />

      <div className={styles.info}>
        <h2>{item.title}</h2>
        <p>{item.price} ₽</p>

        <div className={styles.quantity}>
          <button
            className={styles.quantityButton}
            type="button"
            onClick={() => onDecrease(item.id)}
          >
            −
          </button>

          <span className={styles.quantityValue}>{item.quantity}</span>

          <button
            className={styles.quantityButton}
            type="button"
            onClick={() => onIncrease(item.id)}
          >
            +
          </button>
        </div>
      </div>

      <button
        className={styles.removeButton}
        type="button"
        onClick={() => onRemove(item.id)}
      >
        Удалить
      </button>
    </article>
  );
};

export default CartItem;
