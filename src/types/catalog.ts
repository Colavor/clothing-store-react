export type SortBy = "title" | "price" | "";
export type OrderBy = "asc" | "desc" | "";

export interface ProductQueryParams {
  sortBy?: SortBy;
  order?: OrderBy;
}
