import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setClientData, setOrderData } from "../../redux/order/orderSlice";
import { clearStor } from "../../redux/cart/reducer";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import style from "./order.module.css";
import Alert from "./../../components/alert/index";

const Order = () => {
  const items = useSelector((state) => state.cart.itemsInCart) || [];
  const totalItemCount = useSelector((state) => state.cart.totalItemCount);
  const totalPriceCount = useSelector((state) => state.cart.totalPriceCount);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const requiredFields = ["name", "article", "price", "count"];

  const orderData = items.map((obj) => {
    return Object.keys(obj)
      .filter((key) => requiredFields.includes(key))
      .reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
      }, {});
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    dispatch(setClientData(data));
    dispatch(setOrderData(orderData));
    setShowAlert(true);
    dispatch(clearStor());
    reset();
  };

  return (
    <section className={style.order}>
      {showAlert && (
        <Alert
          message="Ваш заказ принят в обработку!"
          redirectPath="/"
          duration={4000}
        />
      )}
      <div className="container">
        <div className={style.order_title}>
          <h4>Оформление заказа</h4>
        </div>
        <div className={style.order_wrapper}>
          <div className={style.order_form}>
            <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
              <label className={style.label}>
                Введите имя:
                <input
                  className={`${style.input} ${
                    errors.firstName ? style.inputError : ""
                  }`}
                  {...register("firstName", {
                    required: "Введите ваше имя!",
                    minLength: {
                      value: 3,
                      message: "Минимальное количество символов - 3",
                    },
                    pattern: {
                      value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                      message: "Имя должно содержать только буквы",
                    },
                  })}
                />
              </label>
              {errors?.firstName && (
                <p className={style.error}>{errors.firstName.message}</p>
              )}

              <label className={style.label}>
                Введите фамилию:
                <input
                  className={`${style.input} ${
                    errors.lastName ? style.inputError : ""
                  }`}
                  {...register("lastName", {
                    required: "Введите вашу фамилию!",
                    minLength: {
                      value: 4,
                      message: "Минимальное количество символов - 4",
                    },
                    pattern: {
                      value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                      message: "Фамилия должна содержать только буквы",
                    },
                  })}
                />
              </label>
              {errors?.lastName && (
                <p className={style.error}>{errors.lastName.message}</p>
              )}

              <label className={style.label}>
                Телефон (для уточнения заказа):
                <input
                  className={`${style.input} ${
                    errors.phoneNumber ? style.inputError : ""
                  }`}
                  {...register("phoneNumber", {
                    required: "Введите номер телефона!",
                    pattern: {
                      value: /^[+]?[0-9]{10,15}$/,
                      message: "Введите корректный номер телефона",
                    },
                  })}
                />
              </label>
              {errors?.phoneNumber && (
                <p className={style.error}>{errors.phoneNumber.message}</p>
              )}

              <label className={style.label}>
                Email:
                <input
                  className={`${style.input} ${
                    errors.email ? style.inputError : ""
                  }`}
                  {...register("email", {
                    required: "Введите ваш email!",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Введите корректный email",
                    },
                  })}
                />
              </label>
              {errors?.email && (
                <p className={style.error}>{errors.email.message}</p>
              )}
              <label className={style.label}>
                Укажите город для доставки и отделение почтового сервиса
                <input
                  className={`${style.input} ${
                    errors.email ? style.inputError : ""
                  }`}
                  {...register("city", {
                    required: "Введите адрес доставки!",
                  })}
                />
              </label>
              {errors?.city && (
                <p className={style.error}>{errors.city.message}</p>
              )}

              <label className={style.label}>
                Выберите сервис для доставки
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register("NovaPoshta")} 
                />
                Нова Пошта
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  {...register("UkrPoshta")} 
                />
                Укр Пошта
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  {...register("MistPoshta")}
                />
                Meest Пошта
              </label>
            </form>
          </div>

          <aside className={style.order_info}>
            <div className={style.order_info_text}>
              <h4>Итого :</h4>
              <div>
                <span>Сумма покупки </span>
                <span>{totalPriceCount} ₴</span>
              </div>
              <div>
                <span>Доставка</span>
                <span>По тарифам перевозчика</span>
              </div>
              <div className={style.total}>
                <span>К оплате</span>
                <span>{totalPriceCount} ₴</span>
              </div>
              <button
                type="submit"
                form="myForm"
                className={style.submitButton}
              >
                Подтвердить заказ
              </button>
            </div>

            <div className={style.order_info_counter}>
              <div>
                <h4>Кол-во товаров </h4>
                <p className={style.counter}>{totalItemCount}</p>
              </div>
              <NavLink to="/cart" className={style.change}>
                Изменить покупку
              </NavLink>
            </div>

            <div className={style.order_product}>
              {items.length > 0
                ? items.map((item, index) => (
                    <div key={index} className={style.order_product_item}>
                      <div>
                        <img
                          src={item.img}
                          alt={item.name}
                          className={style.order_product_img}
                        />
                      </div>
                      <div className={style.order_product_info}>
                        <h5>{item.name}</h5>
                        <p>Количество - {item.count}</p>
                        <p>Цена за (1шт) - {item.price}₴</p>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Order;
