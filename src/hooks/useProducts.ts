import { useQuery } from "@tanstack/react-query";
import { useCatalogStore } from "../store/useCatalogStore";
import {
  fetchProducts,
  fetchSearchProducts,
  fetchProductsByCategory,
} from "../services/ProductService";
import type { ProductQueryParams } from "../types/catalog";

export const useProducts = ({
  limit,
  skip,
  sortBy,
  order,
  category,
}: ProductQueryParams) => {
  const search = useCatalogStore((state) => state.search);
  const normalizedSearch = search.trim();

  const query = useQuery({
    queryKey: [
      "products",
      normalizedSearch,
      sortBy,
      order,
      category,
      limit,
      skip,
    ],

    queryFn: async () => {
      const params = {
        sortBy,
        order,
        limit,
        skip,
      };

      const data = category
        ? await fetchProductsByCategory(category, params)
        : normalizedSearch
          ? await fetchSearchProducts(normalizedSearch, params)
          : await fetchProducts(params);
      return data;
    },
  });

  return {
    products: query.data?.products ?? [],
    total: query.data?.total ?? 0,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
};
