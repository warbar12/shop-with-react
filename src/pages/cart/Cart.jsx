import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Eye from "./../../components/eye/index";
import Button from "../../components/button";
import Modal from "./../../components/modal/Modal";
import BodyModal from "./../../components/modal/bodyModal/index";
import {
  delItemInCart,
  increaseCountProduct,
  reductionCountProduct,
} from "../../redux/cart/reducer";
import style from "./cart.module.css";

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const items = useSelector((state) => state.cart.itemsInCart) || [];
  const totalItemCount = useSelector((state) => state.cart.totalItemCount);
  const totalPriceCount = useSelector((state) => state.cart.totalPriceCount);
  const dispatch = useDispatch();

  const openModal = (product) => {
    setSelectedProduct(product); 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const removeProductFromBasket = (productID) => {
    dispatch(delItemInCart(productID));
  };

  const increase = (id) => {
    dispatch(increaseCountProduct(id));
  };

  const decrease = (id) => {
    dispatch(reductionCountProduct(id));
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
                      <div className={style.counter_block}>
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
                     <div>
                     <Eye product={item} openModal={() => openModal(item)} />
                     </div>
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

        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <BodyModal product={selectedProduct} /> 
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Cart;
