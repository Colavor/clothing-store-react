import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../services/ProductService";

export const useProduct = (id?: string) => {
  const query = useQuery({
    queryKey: ["product", id],

    queryFn: async () => fetchProductById(id!),
    enabled: Boolean(id),
  });

  return {
    product: query.data,
    isLoading: query.isLoading,
    error: query.error,
  };
};
