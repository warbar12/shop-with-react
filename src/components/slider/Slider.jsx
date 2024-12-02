import React from "react";
import Slider from "react-slick";
/* Стили для slick-carousel */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

// Пример слайдов
const SliderComponent = () => {

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="custom-arrow prev-arrow"
        onClick={onClick}
        style={{ left: "-30px", zIndex: 1 }}
      >
        &#10094;
      </button>
    );
  };
  
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="custom-arrow next-arrow"
        onClick={onClick}
        style={{ right: "-30px", zIndex: 1 }}
      >
        &#10095;
      </button>
    );
  };

  const settings = {
    dots: true, // Показывать точки навигации
    infinite: true, // Зацикливание слайдов
    speed: 1000, // Скорость смены слайдов
    slidesToShow: 1, // Количество слайдов, показываемых одновременно
    slidesToScroll: 1, // Количество слайдов, которые прокручиваются при переходе
    autoplay: true, // Автопрокрутка
    autoplaySpeed: 5000, // Скорость автопрокрутки 
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="slider">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              src="https://img.freepik.com/free-vector/electronics-store-illustration-consumer-appliances-shop-department-interior-trade-mall_33099-791.jpg?t=st=1733136597~exp=1733140197~hmac=5bd4b13886c31bf66f4def21345ccb807fb4816c02d3a091b190d13f81670cab&w=1380"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://img.freepik.com/premium-photo/modern-store-interior-with-sleek-shelves-displaying-various-electronics_319816-12022.jpg?w=1380"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src="https://storeinteriors.ru/wp-content/uploads/interyer-magazina-tekhniki-power-buy-v-bangkoke-05.jpg"
              alt="Slide 3"
            />
          </div>
          <div>
            <img
              src="https://storeinteriors.ru/wp-content/uploads/interyer-magazina-tekhniki-power-buy-v-bangkoke-02.jpg"
              alt="Slide 4"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default SliderComponent;
