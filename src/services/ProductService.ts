import axios from "axios";
import type { ProductResponse } from "../types/product";

export const fetchProducts = async () => {
  const response = await axios.get<ProductResponse>(
    "https://dummyjson.com/products",
  );

  return response.data;
};
