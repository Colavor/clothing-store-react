import styles from "./style.module.css";
import type { Product } from "../../types/product";
import ProductCard from "../ProductCard/ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className={styles.products__list}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
