import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./cart.module.css";
import Button from "../../components/button";
import {
  delItemInCart,
  increaseCountProduct,
  reductionCountProduct,
} from "../../redux/cart/reducer";

const Cart = () => {
  const items = useSelector((state) => state.cart.itemsInCart) || [];
  const totalItemCount = useSelector((state) => state.cart.totalItemCount);
  const totalPriceCount = useSelector((state) => state.cart.totalPriceCount);
  const dispatch = useDispatch();

  const removeProductFromBasket = (productID) => {
    dispatch(delItemInCart(productID));
  };

  const increase = (item) => {
    dispatch(increaseCountProduct(item));
  };

  const decrease = (item) => {
    dispatch(reductionCountProduct(item));
  };

  return (
    <div className={style.cart}>
      <div className="container">
        <div className={style.cart_wrapper}>
          <div className={style.product_info}>
            {items.length > 0 ? (
              items.map((item, index) => (
                <div key={index} className={style.cart_order_information}>
                  <div className={style.cart_order_information_img}>
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className={style.cart_order_information_block}>
                    <h4>{item.name}</h4>
                    <div className={style.wrapper_counter}>
                      <span
                        className={style.counter}
                        onClick={() => decrease(item.id)}
                      >
                        &lt;
                      </span>
                      <span className={style.counter}>{item.count}</span>
                      <span
                        className={style.counter}
                        onClick={() => increase(item.id)}
                      >
                        &gt;
                      </span>
                    </div>
                    <p>Цена: {item.price}₴</p>
                  </div>
                  <span
                    onClick={() => removeProductFromBasket(item.id)}
                    className={style.del}
                  >
                    &times;
                  </span>
                </div>
              ))
            ) : (
              <div className={style.shopping_empty}>
                Ваша корзина пустая! Вернуться на &nbsp;
                <NavLink to="/">главную страницу</NavLink>&nbsp;?
              </div>
            )}
          </div>

          <aside className={style.order_summary}>
            <p>
              Количество товаров:{" "}
              <span className={style.bold}>{totalItemCount}</span>
            </p>
            <p>
              Итоговая цена:{" "}
              <span className={style.bold}>{totalPriceCount} ₴</span>
            </p>
            {totalItemCount > 0 ? (
              <NavLink to="/order" className={style.order_summary_link}>
                <Button type="secondary" size="m">
                  Перейти к оформлению заказа
                </Button>
              </NavLink>
            ) : null}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;
