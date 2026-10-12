import styles from "./style.module.css";

import ProductList from "../../components/ProductList/ProductList";
import Loader from "../../components/UI/Loader/Loader";
import { useProducts } from "../../hooks/useProducts";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
import { useState } from "react";
import MyButton from "../../components/UI/Button/MyButton";
import FiltersDrawer from "../../components/FiltersDrawer/FiltersDrawer";
import type { SortBy, OrderBy } from "../../types/catalog";

const Catalog = () => {
  const [sortBy, setSortBy] = useState<SortBy>("");
  const [order, setOrder] = useState<OrderBy>("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const { products, isLoading, error, refetch } = useProducts({
    sortBy,
    order,
  });

  return (
    <div className={styles.catalog}>
      <MyButton onClick={() => setIsFiltersOpen(true)}>Фильтры</MyButton>

      {isFiltersOpen && (
        <FiltersDrawer
          isOpen={isFiltersOpen}
          sortBy={sortBy}
          order={order}
          onSortByChange={setSortBy}
          onOrderByChange={setOrder}
          onClose={() => setIsFiltersOpen(false)}
        />
      )}

      {isLoading && <Loader />}

      {error && (
        <ErrorMessage
          onRetry={() => refetch()}
          message="Не удалось загрузить товары"
        />
      )}

      {!isLoading && !error && <ProductList products={products} />}
    </div>
  );
};

export default Catalog;
