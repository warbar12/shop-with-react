import React from "react";
import style from "./slider.module.css";

const Slider = () => {
    return (
        <section className={style.slider}>
            <div className="container">
                <div className={style.baner}>
                    <h3 className={style.baner_title}>Новинка!</h3>
                    <img className={style.slider_photo}
                        src="https://images03.nicepage.io/a1389d7bc73adea1e1c1fb7e/7fadf3e17560549c8f9694b2/pexels-photo-2007647.jpeg"
                        alt="Foto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Slider;
