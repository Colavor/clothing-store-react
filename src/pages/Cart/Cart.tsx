import styles from "./styles.module.css";
import CartItem from "../../components/CartItem/CartItem";
import { useCartStore } from "../../store/useCartStore";

const Cart = () => {
  const items = useCartStore((state) => state.items);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <main className={styles.cartEmpty}>
        <h1>Корзина пуста</h1>
      </main>
    );
  }

  return (
    <main className={styles.cart}>
      <h1 className={styles.title}>Корзина</h1>

      <div className={styles.items}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeItem}
          />
        ))}
      </div>

      <div className={styles.summary}>
        <p>Итого: {totalPrice.toFixed(2)} ₽</p>

        <button
          className={styles.clearButton}
          type="button"
          onClick={clearCart}
        >
          Очистить корзину
        </button>
      </div>
    </main>
  );
};

export default Cart;
