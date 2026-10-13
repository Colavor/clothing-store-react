import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
import Loader from "../../components/UI/Loader/Loader";
import MyButton from "../../components/UI/Button/MyButton";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();

  const { product, isLoading, error } = useProduct(productId);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message="Не удалось загрузить товар" />;
  }

  if (!product) {
    return null;
  }

  return (
    <main className={styles.product__details}>
      <div>
        {product.images.map((image) => (
          <img key={image} src={image} alt={product.title} />
        ))}
      </div>
      <div className={styles.product__description}>
        <h1>{product.title}</h1>
        <p>{product.category}</p>
        <p>{product.price} ₽</p>
        <MyButton>Добавить в корзину</MyButton>
      </div>
    </main>
  );
};

export default ProductDetails;
