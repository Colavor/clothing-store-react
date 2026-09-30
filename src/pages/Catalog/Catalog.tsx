import styles from "./style.module.css";
import { useState, useEffect } from "react";
import type { Product } from "../../types/product";
import { fetchProducts } from "../../services/ProductService";
import ProductList from "../../components/ProductList/ProductList";

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data.products);
    });
  }, []);

  return (
    <div className={styles.catalog}>
      <ProductList products={products} />
    </div>
  );
};

export default Catalog;
