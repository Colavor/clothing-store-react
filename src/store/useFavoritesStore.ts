import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/product";

interface FavoritesStoreState {
  items: Product[];

  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  clearFavorites: () => void;
  isFavorite: (productId: number) => boolean;
}

export const useFavoritesStore = create<FavoritesStoreState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) =>
        set((state) => {
          const alreadyExists = state.items.some(
            (item) => item.id === product.id,
          );

          if (alreadyExists) {
            return state;
          }

          return {
            items: [...state.items, product],
          };
        }),

      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),

      clearFavorites: () =>
        set({
          items: [],
        }),

      isFavorite: (productId) =>
        get().items.some((item) => item.id === productId),
    }),
    {
      name: "favorites-storage",
    },
  ),
);
