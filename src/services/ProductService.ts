import axios from "axios";
import type { ProductResponse } from "../types/product";
import type { Category, ProductQueryParams } from "../types/catalog";

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

export const fetchCategories = async () => {
  const response = await axios.get<Category[]>(
    "https://dummyjson.com/products/categories",
  );

  return response.data;
};

export const fetchProductsByCategory = async (
  category: string,
  { sortBy, order }: ProductQueryParams = {},
) => {
  const response = await axios.get<ProductResponse>(
    `https://dummyjson.com/products/category/${category}`,
    {
      params: {
        ...(sortBy && { sortBy }),
        ...(order && { order }),
      },
    },
  );

  return response.data;
};
