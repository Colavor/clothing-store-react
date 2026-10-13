export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  thumbnail: string;
  category: string;
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
