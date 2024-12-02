import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

import styles from "./error.module.css"; // Подключаем модуль стилей

const NotFoundPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  const goHome = () => {
    navigate("/");
  };

  return (
    <section className={styles.error}>
      <div className="container">
        <div className={styles.notFoundPage}>
          <h1 className={styles.notFoundTitle}>{error.status}</h1>
          <p className={styles.notFoundText}>Извините, страница не найдена</p>
          <p className={styles.notFoundSubtext}>
            Страница, которую вы ищете, не найдена
          </p>
          <button className={styles.goHomeButton} onClick={goHome}>
            Вернуться домой
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
