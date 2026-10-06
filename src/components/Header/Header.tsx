import style from "./style.module.css";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import { useCatalogStore } from "../../store/useCatalogStore";
import { useCallback, useRef, useState } from "react";
import MyInput from "../UI/Input/MyInput";
import { useClickOutside } from "../../hooks/useClickOutside";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const search = useCatalogStore((state) => state.search);
  const setSearch = useCatalogStore((state) => state.setSearch);

  const [inputValue, setInputValue] = useState(search);

  const searchRef = useRef<HTMLLIElement>(null);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  useClickOutside({
    ref: searchRef,
    callback: closeSearch,
  });

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
