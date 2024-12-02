import React from "react";
import { FaLocationDot, FaPhone, FaViber, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

import style from "./contacts.module.css";

const Contacts = () => {
  return (
    <section className={style.contacts}>
      <div className="container">
        <div className={style.contacts_info}>
          <div className={style.contacts_info_block}>
            <FaLocationDot size={50} />
            <p>ул. Белицкая, 56-58, Киев, 02000</p>
          </div>
          <div className={style.contacts_info_block}>
            <FaPhone size={50} />
            <p>
              +38(067)-777-77-77 <br /> +38(097)-777-77-77
            </p>
          </div>
          <div className={style.contacts_info_block}>
            <MdEmail size={50} />
            <p>tehnika@mira.com.ua</p>
          </div>
          <div className={style.contacts_info_block}>
            <NavLink to="#">
              <FaTelegramPlane size={60} />
            </NavLink>
            <NavLink to="#">
              <FaViber size={60} />
            </NavLink>
            <NavLink to="#">
              <IoLogoWhatsapp size={60} />
            </NavLink>
            <NavLink to="#">
              <FaInstagram size={60} />
            </NavLink>
          </div>
        </div>
        <div className={style.map}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!!1d2538.2366769393493!2d30.436439444811597!3d50.492552693293725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd9edcf24939%3A0xbc806128cd2d27bc!2z0YPQuy4g0JHQtdC70LjRhtC60LDRjywgNTYtNTgsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1733003786242!5m2!1sru!2sua"
            width="100%"
            height="350"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
