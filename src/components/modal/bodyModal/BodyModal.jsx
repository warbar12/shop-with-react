import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItemInCart } from "../../../redux/cart/reducer";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Button from "../../button";
import styles from "./bodyModal.module.css";

const BodyModal = () => {
  const itemsInModal = useSelector((state) => state.intro.itemsInModal);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = useCallback((event) => {
    event.stopPropagation();
    dispatch(setItemInCart(itemsInModal));
  }, [dispatch, itemsInModal]);

  // Обработчик для перехода по категории
  const handleCategoryClick = useCallback((event, categoriesId) => {
    event.preventDefault();

    const newPath = `category/${categoriesId}`;

    // Проверяем, если текущий путь совпадает с новым
    if (location.pathname !== `/${newPath}`) {
      navigate(newPath); // Переход на новую страницу
    }
  }, [location.pathname, navigate]);

  return (
    <div className={styles.body_modal}>
      {itemsInModal.length > 0
        ? itemsInModal.map((product) => (
            <div key={product.id} className={styles.productItem}>
              <div className={styles.modal_body_info}>
                <div className={styles.modal_body_info_img}>
                  <img 
                    src={product.img} 
                    alt={product.name} 
                  />
                </div>
                <div className={styles.modal_body_info_text}>
                  <h3 className={styles.title}>{product.name}</h3>
                  <p className={styles.nameCategories}>
                    Категория - 
                    <NavLink 
                      to={`category/${product.categoriesId}`} 
                      onClick={(event) => handleCategoryClick(event, product.categoriesId)}
                    >
                      {product.nameCategories}
                    </NavLink>
                  </p>
                  <div className={styles.modal_body_info}>
                    <p className={styles.articl}>Артикул - {product.article || 'Не указан'}</p>
                    <p className={styles.color}>Цвет - {product.color || 'Не указан'}</p>
                  </div>
                  <h4 className={styles.price}>{product.price} грн</h4>
                </div>
              </div>
              <div className={styles.block_buy}>
                <Button onClick={handleAddToCart} type="secondary">Добавить в корзину</Button>
                <NavLink to='/order' onClick={handleAddToCart}>
                    <Button type="primary" >Купить в один клик</Button>
                </NavLink>
              </div>
            </div>
          ))
        : "В модальном окне ничего нету"}
    </div>
  );
};

export default BodyModal;
