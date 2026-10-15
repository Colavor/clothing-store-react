import styles from "./styles.module.css";
import { useFavoritesStore } from "../../store/useFavoritesStore";

const Favourites = () => {
  const items = useFavoritesStore((state) => state.items);

  if (items.length === 0) {
    return (
      <main className={styles.empty}>
        <h1>Избранное пусто</h1>
      </main>
    );
  }

  return (
    <main className={styles.favourites}>
      <h1 className={styles.title}>Избранное</h1>

      <div className={styles.list}>
        {items.map((item) => (
          <article key={item.id} className={styles.item}>
            <img
              className={styles.image}
              src={item.thumbnail}
              alt={item.title}
            />

            <div className={styles.info}>
              <h2>{item.title}</h2>
              <p>{item.price.toFixed(2)} ₽</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Favourites;
