import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services/ProductService";

export const useCategories = () => {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return {
    categories: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
  };
};
