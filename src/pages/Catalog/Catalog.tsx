import styles from "./style.module.css";

import ProductList from "../../components/ProductList/ProductList";
import { useProducts } from "../../hooks/useProducts";

const Catalog = () => {
  const { products } = useProducts();

  return (
    <div className={styles.catalog}>
      <ProductList products={products} />
    </div>
  );
};

export default Catalog;
