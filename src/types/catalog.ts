export type SortBy = "title" | "price" | "";
export type OrderBy = "asc" | "desc" | "";

export interface ProductQueryParams {
  limit: number;
  skip: number;
  sortBy?: SortBy;
  order?: OrderBy;
  category?: string;
}

export interface Category {
  slug: string;
  name: string;
  url: string;
}
