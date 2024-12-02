import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import Eye from "../eye";
import Button from "../button";
import Modal from "../modal/Modal";
import style from "./productIrems.module.css";
import BodyModal from "./../modal/bodyModal/BodyModal";


const ProductItem = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(setItemInCart(product));
  };

  return (
    <div className={style.intro_product_list_item}>
      <div className={style.block_img}>
        <img
          className={style.intro_product_list_item_img}
          src={product.img}
          alt={product.name}
        />
      </div>
      <div className={style.intro_product_list_item_text}>
        <p className={style.title}>{product.name}</p>
        <div className={style.sunInfo}>
          <p>Цвет - {product.color}</p>
          <p>Артикул - {product.article}</p>
        </div>
        <p className={style.price}>{product.price} грн</p>
      </div>
      <span className={style.dropout_block}>
        <Eye product={product} openModal={openModal} />
      </span>

      <div className={style.block_buy}>
        <Button onClick={handleClick} type="secondary">
          Добавить в корзину
        </Button>
        <NavLink to="/order" onClick={handleClick}>
          <Button type="primary">Купить в один клик</Button>
        </NavLink>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <BodyModal product={product} />
      </Modal>
    </div>
  );
};

export default ProductItem;
