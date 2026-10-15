import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
import Loader from "../../components/UI/Loader/Loader";
import MyButton from "../../components/UI/Button/MyButton";
import { useCartStore } from "../../store/useCartStore";
import { useFavoritesStore } from "../../store/useFavoritesStore";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();

  const { product, isLoading, error } = useProduct(productId);

  const addItem = useCartStore((state) => state.addItem);

  const favoriteItems = useFavoritesStore((state) => state.items);

  const addToFavorites = useFavoritesStore((state) => state.addItem);

  const removeFromFavorites = useFavoritesStore((state) => state.removeItem);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message="Не удалось загрузить товар" />;
  }

  if (!product) {
    return null;
  }

  const isFavorite = favoriteItems.some((item) => item.id === product.id);

  return (
    <main className={styles.product__details}>
      <div>
        {product.images.map((image) => (
          <img
            key={image}
            src={image}
            alt={product.title}
            className={styles.images__product}
          />
        ))}
      </div>
      <div className={styles.product__description}>
        <h1>{product.title}</h1>
        <p>{product.category}</p>
        <p>{product.price} ₽</p>
        <MyButton onClick={() => addItem(product)}>Добавить в корзину</MyButton>

        <MyButton
          onClick={() => {
            if (isFavorite) {
              removeFromFavorites(product.id);
            } else {
              addToFavorites(product);
            }
          }}
        >
          {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
        </MyButton>
      </div>
    </main>
  );
};

export default ProductDetails;
