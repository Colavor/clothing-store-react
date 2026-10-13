import { useCategories } from "./useCategories";
import { useCategoriesStore } from "../store/useCategoriesStore";

export const useCategoriesDrawer = () => {
  const isOpen = useCategoriesStore((state) => state.isOpen);

  const open = useCategoriesStore((state) => state.open);

  const close = useCategoriesStore((state) => state.close);

  const { categories } = useCategories();

  return {
    isOpen,
    open,
    close,
    categories,
  };
};
