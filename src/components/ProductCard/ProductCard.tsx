import styles from "./styles.module.css";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card__product}>
      <img
        className={styles.card__preview}
        src={product.thumbnail}
        alt={product.title}
      />
      <div className={styles.card__description}>
        <h4>{product.title}</h4>
        <span>{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
