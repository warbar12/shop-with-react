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

  const handleAddToCart = useCallback(
    (event) => {
      event.stopPropagation();
      dispatch(setItemInCart(itemsInModal));
    },
    [dispatch, itemsInModal]
  );

  // Обработчик для перехода по категории
  const handleCategoryClick = useCallback(
    (event, categoriesId) => {
      event.preventDefault();

      const newPath = `category/${categoriesId}`;

      // Проверяем, если текущий путь совпадает с новым
      if (location.pathname !== `/${newPath}`) {
        navigate(newPath); // Переход на новую страницу
      }
    },
    [location.pathname, navigate]
  );



  return (
    <div className={styles.body_modal}>
      {itemsInModal.length > 0
        ? itemsInModal.map((product) => (
            <div key={product.id} className={styles.productItem}>
              <div className={styles.modal_body_info}>
                <div className={styles.modal_body_info_img}>
                  <img src={product.img} alt={product.name} />
                </div>
                <div className={styles.modal_body_info_text}>
                  <h3 className={styles.title}>{product.name}</h3>
                  <p className={styles.nameCategories}>
                    Категория -
                    <NavLink
                      to={`category/${product.categoriesId}`}
                      onClick={(event) =>
                        handleCategoryClick(event, product.categoriesId)
                      }
                    >
                      {product.nameCategories}
                    </NavLink>
                  </p>
                  <div className={styles.modal_body_info}>
                    <p className={styles.articl}>
                      Артикул - {product.article || "Не указан"}
                    </p>
                    <p className={styles.color}>
                      Цвет - {product.color || "Не указан"}
                    </p>
                  </div>
                  <h4 className={styles.price}>{product.price} грн</h4>
                </div>
              </div>
              {console.log(product)}




<div className={styles.modalBody_description}>
  Характеристики ноутбука
  <table className={styles.modalBody_description_table}>
    <thead>
      <tr>
        <th colSpan="2">Характеристика - {product.name}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Серия</td>
        <td>{product?.description?.series || "Не указано"}</td>
      </tr>
      <tr>
        <td>Диагональ экрана</td>
        <td>{product?.description?.screen?.diagonal || "Не указано"}</td>
      </tr>
      <tr>
        <td>Частота обновления</td>
        <td>{product?.description?.screen?.refreshRate || "Не указано"}</td>
      </tr>
      <tr>
        <td>Тип экрана</td>
        <td>{product?.description?.screen?.type || "Не указано"}</td>
      </tr>
      <tr>
        <td>Разрешение экрана</td>
        <td>{product?.description?.screen?.resolution || "Не указано"}</td>
      </tr>
      <tr>
        <td>Покрытие экрана</td>
        <td>{product?.description?.screen?.coating || "Не указано"}</td>
      </tr>
      <tr>
        <td>Процессор</td>
        <td>{product?.description?.processor?.type || "Не указано"}</td>
      </tr>
      <tr>
        <td>Операционная система</td>
        <td>{product?.description?.processor?.operatingSystem || "Не указано"}</td>
      </tr>
      <tr>
        <td>Оперативная память</td>
        <td>{product?.description?.ram?.size || "Не указано"}</td>
      </tr>
      <tr>
        <td>Тип хранилища</td>
        <td>{product?.description?.storage?.type || "Не указано"}</td>
      </tr>
      <tr>
        <td>Емкость хранилища</td>
        <td>{product?.description?.storage?.capacity || "Не указано"}</td>
      </tr>
      <tr>
        <td>М2 слоты</td>
        <td>{product?.description?.storage?.m2Slots || "Не указано"}</td>
      </tr>
      <tr>
        <td>SATA слоты</td>
        <td>{product?.description?.storage?.sataSlots || "Не указано"}</td>
      </tr>
      <tr>
        <td>Графика</td>
        <td>{product?.description?.graphics?.manufacturer || "Не указано"} - {product?.description?.graphics?.type || "Не указано"}</td>
      </tr>
      <tr>
        <td>Ёмкость аккумулятора</td>
        <td>{product?.description?.case?.batteryCapacity || "Не указано"}</td>
      </tr>
      <tr>
        <td>Вес</td>
        <td>{product?.description?.case?.weight || "Не указано"}</td>
      </tr>
      <tr>
        <td>Аккумулятор</td>
        <td>{product?.description?.case?.batteryFeatures || "Не указано"}</td>
      </tr>
      <tr>
        <td>Размеры</td>
        <td>{product?.description?.case?.dimensions || "Не указано"}</td>
      </tr>
      <tr>
        <td>Wi-Fi</td>
        <td>{product?.description?.connectivity?.wifi || "Не указано"}</td>
      </tr>
      <tr>
        <td>Bluetooth</td>
        <td>{product?.description?.connectivity?.bluetooth || "Не указано"}</td>
      </tr>
      <tr>
        <td>Порты</td>
        <td>
          {product?.description?.ports?.thunderbolt || "Не указано"} |{" "}
          {product?.description?.ports?.audioJack || "Не указано"}
        </td>
      </tr>
      <tr>
        <td>Дополнительные особенности</td>
        <td>
          {Array.isArray(product?.description?.additionalFeatures)
            ? product.description.additionalFeatures.join(", ")
            : "Не указано"}
        </td>
      </tr>
      <tr>
        <td>Страна производства</td>
        <td>{product?.description?.countryOfOrigin || "Не указано"}</td>
      </tr>
      <tr>
        <td>Гарантия</td>
        <td>{product?.description?.warranty || "Не указано"}</td>
      </tr>
      <tr>
        <td>Модельный год</td>
        <td>{product?.description?.modelYear || "Не указано"}</td>
      </tr>
      <tr>
        <td>Класс</td>
        <td>{product?.description?.class || "Не указано"}</td>
      </tr>
      <tr>
        <td>Тип</td>
        <td>{product?.description?.type || "Не указано"}</td>
      </tr>
      <tr>
        <td>Дополнительные опции</td>
        <td>
          {Array.isArray(product?.description?.extraOptions)
            ? product.description.extraOptions.join(", ")
            : "Не указано"}
        </td>
      </tr>
      <tr>
        <td>Содержимое упаковки</td>
        <td>
          {Array.isArray(product?.description?.packageContents)
            ? product.description.packageContents.join(", ")
            : "Не указано"}
        </td>
      </tr>
    </tbody>
  </table>
</div>





              <div className={styles.block_buy}>
                <Button onClick={handleAddToCart} type="secondary">
                  Добавить в корзину
                </Button>
                <NavLink to="/order" onClick={handleAddToCart}>
                  <Button type="primary">Купить в один клик</Button>
                </NavLink>
              </div>
            </div>
          ))
        : "В модальном окне ничего нету"}
    </div>
  );
};

export default BodyModal;
