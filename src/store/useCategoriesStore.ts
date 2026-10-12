import { create } from "zustand";

interface CategoriesStoreState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useCategoriesStore = create<CategoriesStoreState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
