import styles from "./styles.module.css";
import type { Category } from "../../types/catalog";
import { Link } from "react-router-dom";

interface CategoriesDrawerProps {
  isOpenCategories: boolean;
  categories: Category[];
  onCloseCategories: () => void;
}

const CategoriesDrawer = ({
  isOpenCategories,
  categories,
  onCloseCategories,
}: CategoriesDrawerProps) => {
  if (!isOpenCategories) {
    return null;
  }

  return (
    <div className={styles.overlay} onClick={onCloseCategories}>
      <aside
        className={styles.categories__container}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.filters__header}>
          <h3 className={styles.filters__title}>Категории</h3>

          <button
            type="button"
            className={styles.close__button}
            onClick={onCloseCategories}
          >
            ×
          </button>
        </div>

        <section className={styles.categories__section}>
          <Link
            to="/catalog"
            className={styles.category__option}
            onClick={onCloseCategories}
          >
            Все товары
          </Link>

          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/catalog/category/${category.slug}`}
              className={styles.category__option}
              onClick={onCloseCategories}
            >
              {category.name}
            </Link>
          ))}
        </section>
      </aside>
    </div>
  );
};

export default CategoriesDrawer;
