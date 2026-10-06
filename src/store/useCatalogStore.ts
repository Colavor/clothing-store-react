import { create } from "zustand";

interface CatalogStoreState {
  search: string;
  setSearch: (search: string) => void;
}

export const useCatalogStore = create<CatalogStoreState>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
}));
