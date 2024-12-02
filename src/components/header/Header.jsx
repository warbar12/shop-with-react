import React from "react";
import logo from "./logo.png";
import Nav from "./../nav/Nav";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.header_top}>
        <div>
          Есть вопросы? Пишите: tehnika@mira.com.ua. Звоните: +38(067)-777-77-77
          , +38(097)-777-77-77
        </div>
        <div>График работы: ПН-СБ: 10:00 - 18:00</div>
      </div>
     <div className={styles.d_flex}>
     <div className={styles.header_bottom}>
        <div className={styles.header_bottom_}>
          <NavLink to="/">
            <img className={styles.header_bottom_logo} src={logo} alt="Logo" />
          </NavLink>
        </div>
      </div>
      <div className={styles.header_bottom_nav}>
          <Nav/>
        </div>
     </div>
    </section>
  );
};

export default Header;

