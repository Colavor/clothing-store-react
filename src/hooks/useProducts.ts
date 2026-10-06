import { useEffect, useState } from "react";
import { useCatalogStore } from "../store/useCatalogStore";
import type { Product } from "../types/product";
import { fetchProducts, fetchSearchProducts } from "../services/ProductService";

export const useProducts = () => {
  const search = useCatalogStore((state) => state.search);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = search.trim()
        ? await fetchSearchProducts(search)
        : await fetchProducts();

      setProducts(data.products);
    };

    loadProducts();
  }, [search]);

  return { products };
};
