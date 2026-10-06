import axios from "axios";
import type { ProductResponse } from "../types/product";

export const fetchProducts = async () => {
  const response = await axios.get<ProductResponse>(
    "https://dummyjson.com/products",
  );

  return response.data;
};

export const fetchSearchProducts = async (query: string) => {
  const response = await axios.get<ProductResponse>(
    "https://dummyjson.com/products/search",
    {
      params: {
        q: query,
      },
    },
  );

  return response.data;
};
