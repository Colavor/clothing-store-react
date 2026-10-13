import styles from "./styles.module.css";
import type { Product } from "../../types/product";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className={styles.card__product}>
      <img
        className={styles.card__preview}
        src={product.thumbnail}
        alt={product.title}
      />
      <div className={styles.card__description}>
        <h4>{product.title}</h4>
        <span>{product.price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
