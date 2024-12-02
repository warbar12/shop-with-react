import React from "react";
import { useSelector } from "react-redux";
import ItemInCart from "./../ItemInCart/index";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "./nav.css";

const Nav = () => {
  const items = useSelector((state) => state.cart.itemsInCart) || [];
  const category = useSelector((state) => state.products.productsArr) || [];

  // вытаскиваем уникальные данные для ссылок
  const uniqueCategories = category
    .map((item) => ({
      categoriesId: item.categoriesId,
      nameCategories: item.nameCategories,
    }))
    .filter(
      (item, index, array) =>
        index === array.findIndex((el) => el.categoriesId === item.categoriesId)
    );

  return (
    <nav className="nav">
      <ul className="ul">
        <li>
          <NavLink to="/" className="link">
            Главная
          </NavLink>
        </li>
        <li className="dropdown">
          <p className="link">Каталог &nbsp;&#9660;</p>
          <ul className="dropdown-content">
            {uniqueCategories.length > 0
              ? uniqueCategories.map((item, i) => (
                  <li key={i}>
                    <NavLink
                      to={`category/${item.categoriesId}`}
                      className="dropdown-content-li"
                    >
                      {item.nameCategories}
                    </NavLink>
                  </li>
                ))
              : "Категории временно отсутствуют"}
          </ul>
        </li>
        <li>
          <NavLink to="/contacts" className="link">
            Контакты
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="link count">
            <ItemInCart quantity={items.length} />
            <BsCart4 size={35} className="cart-block__icon" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
