import axios from "axios";
import type { ProductResponse } from "../types/product";
import type { ProductQueryParams } from "../types/catalog";

export const fetchProducts = async ({
  sortBy,
  order,
}: ProductQueryParams = {}) => {
  const response = await axios.get<ProductResponse>(
    "https://dummyjson.com/products",
    {
      params: {
        ...(sortBy && { sortBy }),
        ...(order && { order }),
      },
    },
  );

  return response.data;
};

export const fetchSearchProducts = async (
  query: string,
  { sortBy, order }: ProductQueryParams = {},
) => {
  const response = await axios.get<ProductResponse>(
    "https://dummyjson.com/products/search",
    {
      params: {
        q: query,
        ...(sortBy && { sortBy }),
        ...(order && { order }),
      },
    },
  );

  return response.data;
};
