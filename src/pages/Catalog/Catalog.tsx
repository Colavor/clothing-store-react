import styles from "./style.module.css";
import ProductList from "../../components/ProductList/ProductList";
import Loader from "../../components/UI/Loader/Loader";
import { useProducts } from "../../hooks/useProducts";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
import { useState } from "react";
import MyButton from "../../components/UI/Button/MyButton";
import FiltersDrawer from "../../components/FiltersDrawer/FiltersDrawer";
import type { SortBy, OrderBy } from "../../types/catalog";
import { useParams } from "react-router-dom";
import Pagination from "../../components/UI/Pagination/Pagination";
import { usePagination } from "../../hooks/usePagination";

const Catalog = () => {
  //Filters
  const [sortBy, setSortBy] = useState<SortBy>("");
  const [order, setOrder] = useState<OrderBy>("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const { categorySlug } = useParams<{ categorySlug: string }>();

  const { page, setPage, limit, skip } = usePagination(20);

  const { products, total, isLoading, error, refetch } = useProducts({
    sortBy,
    order,
    category: categorySlug,
    skip: skip,
    limit: limit,
  });

  const totalPages = Math.ceil(total / limit);

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

      {!isLoading && !error && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default Catalog;
