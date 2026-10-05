import style from "./style.module.css";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.left}>
        <button className={style.menuButton}>
          <img src={menu} alt="menu" className={style.menuIcon} />
        </button>

        <a href="#" className={style.logo}>
          <img src={logo} alt="Our logo" className={style.logoImage} />
        </a>
      </div>

      <nav className={style.menu}>
        <ul>
          <li>
            <a href="#search">Поиск</a>
          </li>
          <li>
            <a href="#profile">Профиль</a>
          </li>
          <li>
            <a href="#favourite">Избранное</a>
          </li>
          <li>
            <a href="#card">Корзина</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
