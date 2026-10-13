import axios from "axios";
import type { Product, ProductResponse } from "../types/product";
import type { Category, ProductQueryParams } from "../types/catalog";

export const fetchProducts = async ({
  limit,
  skip,
  sortBy,
  order,
}: ProductQueryParams) => {
  const response = await axios.get<ProductResponse>(
    "https://dummyjson.com/products",
    {
      params: {
        limit,
        skip,
        ...(sortBy && { sortBy }),
        ...(order && { order }),
      },
    },
  );

  return response.data;
};

export const fetchSearchProducts = async (
  query: string,
  { skip, limit, sortBy, order }: ProductQueryParams,
) => {
  const response = await axios.get<ProductResponse>(
    "https://dummyjson.com/products/search",
    {
      params: {
        q: query,
        limit,
        skip,
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
  { limit, skip, sortBy, order }: ProductQueryParams,
) => {
  const response = await axios.get<ProductResponse>(
    `https://dummyjson.com/products/category/${category}`,
    {
      params: {
        limit,
        skip,
        ...(sortBy && { sortBy }),
        ...(order && { order }),
      },
    },
  );

  return response.data;
};

export const fetchProductById = async (id: string) => {
  const response = await axios.get<Product>(
    `https://dummyjson.com/products/${id}`,
  );

  return response.data;
};
