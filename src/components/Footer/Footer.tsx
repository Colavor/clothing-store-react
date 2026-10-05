import styles from "./style.module.css";

import MyButton from "../UI/Button/MyButton";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h3>Подписаться на рассылку</h3>
        <MyButton>Подписаться</MyButton>
      </div>

      <div className={styles.footerColumn}>
        <h4>КОНТАКТЫ</h4>

        <ul>
          <li>
            <a href="#">Рассылка</a>
          </li>
          <li>
            <a href="#">Обратная связь</a>
          </li>
          <li>
            <a href="#">Социальные сети</a>
          </li>
        </ul>
      </div>

      <div className={styles.footerColumn}>
        <h4>КОМПАНИЯ</h4>

        <ul>
          <li>
            <a href="#">О компании</a>
          </li>
          <li>
            <a href="#">Магазины</a>
          </li>
          <li>
            <a href="#">Скачать приложение</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
