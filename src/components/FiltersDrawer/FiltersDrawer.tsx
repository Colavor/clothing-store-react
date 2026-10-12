import styles from "./styles.module.css";
import type { SortBy, OrderBy } from "../../types/catalog";

interface FiltersDrawerProps {
  isOpen: boolean;
  sortBy: SortBy;
  order: OrderBy;
  onSortByChange: (sort: SortBy) => void;
  onOrderByChange: (order: OrderBy) => void;
  onClose: () => void;
}

const FiltersDrawer = ({
  isOpen,
  sortBy,
  order,
  onSortByChange,
  onOrderByChange,
  onClose,
}: FiltersDrawerProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <aside
        className={styles.filters__container}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.filters__header}>
          <h3 className={styles.filters__title}>Фильтры</h3>

          <button
            type="button"
            className={styles.close__button}
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <section className={styles.filters__section}>
          <h4 className={styles.filters__subtitle}>Сортировка</h4>

          <label className={styles.filter__option}>
            <input
              type="radio"
              name="sort"
              checked={sortBy === "" && order === ""}
              onChange={() => {
                onSortByChange("");
                onOrderByChange("");
              }}
            />
            По умолчанию
          </label>

          <label className={styles.filter__option}>
            <input
              type="radio"
              name="sort"
              checked={sortBy === "title" && order === "asc"}
              onChange={() => {
                onSortByChange("title");
                onOrderByChange("asc");
              }}
            />
            Название: А–Я
          </label>

          <label className={styles.filter__option}>
            <input
              type="radio"
              name="sort"
              checked={sortBy === "title" && order === "desc"}
              onChange={() => {
                onSortByChange("title");
                onOrderByChange("desc");
              }}
            />
            Название: Я–А
          </label>

          <label className={styles.filter__option}>
            <input
              type="radio"
              name="sort"
              checked={sortBy === "price" && order === "asc"}
              onChange={() => {
                onSortByChange("price");
                onOrderByChange("asc");
              }}
            />
            Сначала дешёвые
          </label>

          <label className={styles.filter__option}>
            <input
              type="radio"
              name="sort"
              checked={sortBy === "price" && order === "desc"}
              onChange={() => {
                onSortByChange("price");
                onOrderByChange("desc");
              }}
            />
            Сначала дорогие
          </label>
        </section>
      </aside>
    </div>
  );
};

export default FiltersDrawer;
