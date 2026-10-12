import styles from "./styles.module.css";
import MyButton from "../Button/MyButton";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  return (
    <div className={styles.error__container}>
      <h2>Упс...</h2>
      <p>{message}</p>

      {onRetry && <MyButton onClick={onRetry}>Попробовать снова</MyButton>}
    </div>
  );
};

export default ErrorMessage;
