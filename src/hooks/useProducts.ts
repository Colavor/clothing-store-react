import { useQuery } from "@tanstack/react-query";
import { useCatalogStore } from "../store/useCatalogStore";
import {
  fetchProducts,
  fetchSearchProducts,
  fetchProductsByCategory,
} from "../services/ProductService";
import type { ProductQueryParams } from "../types/catalog";

export const useProducts = ({
  sortBy,
  order,
  category,
}: ProductQueryParams) => {
  const search = useCatalogStore((state) => state.search);
  const normalizedSearch = search.trim();

  const query = useQuery({
    queryKey: ["products", normalizedSearch, sortBy, order, category],

    queryFn: async () => {
      const params = {
        sortBy,
        order,
        category,
      };

      const data = category
        ? await fetchProductsByCategory(category, params)
        : normalizedSearch
          ? await fetchSearchProducts(normalizedSearch, params)
          : await fetchProducts(params);
      return data.products;
    },
  });

  return {
    products: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
};
