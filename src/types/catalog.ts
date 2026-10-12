export type SortBy = "title" | "price" | "";
export type OrderBy = "asc" | "desc" | "";

export interface ProductQueryParams {
  sortBy?: SortBy;
  order?: OrderBy;
  category?: string;
}

export interface Category {
  slug: string;
  name: string;
  url: string;
}
