import style from "./style.module.css";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import { useCatalogStore } from "../../store/useCatalogStore";
import { useCallback, useRef, useState } from "react";
import MyInput from "../UI/Input/MyInput";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useCategoriesDrawer } from "../../hooks/useCategoriesDrawer";
import CategoriesDrawer from "../CategoriesDrawer/CategoriesDrawer";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const search = useCatalogStore((state) => state.search);
  const setSearch = useCatalogStore((state) => state.setSearch);

  const items = useCartStore((state) => state.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  const [inputValue, setInputValue] = useState(search);

  const searchRef = useRef<HTMLLIElement>(null);

  const navigate = useNavigate();

  const { isOpen, open, close, categories } = useCategoriesDrawer();

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  useClickOutside({
    ref: searchRef,
    callback: closeSearch,
  });

  return (
    <header className={style.header}>
      <CategoriesDrawer
        isOpenCategories={isOpen}
        categories={categories}
        onCloseCategories={close}
      />

      <div className={style.left}>
        <button className={style.menuButton} onClick={open}>
          <img src={menu} alt="menu" className={style.menuIcon} />
        </button>

        <Link to="/" className={style.logo}>
          <img src={logo} alt="Our logo" className={style.logoImage} />
        </Link>
      </div>

      <nav className={style.menu}>
        <ul>
          <li ref={searchRef}>
            {!isSearchOpen ? (
              <button
                className={style.search__button}
                onClick={() => setIsSearchOpen(true)}
              >
                Поиск
              </button>
            ) : (
              <MyInput
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setSearch(inputValue);
                    navigate("/catalog");
                    setIsSearchOpen(false);
                  }
                }}
                autoFocus
                placeholder="Поиск..."
              />
            )}
          </li>
          <li>
            <a href="#profile">Профиль</a>
          </li>
          <Link to="/favorites">Избранное</Link>
          <li>
            <Link to="/cart">
              Корзина {totalQuantity > 0 && `[${totalQuantity}]`}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
