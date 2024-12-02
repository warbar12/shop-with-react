import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.info}>© 2023 - 2024. Всe права защищены.</div>
      </div>
    </div>
  );
};

export default Footer;
