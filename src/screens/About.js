import React from "react";
import "./About.css";
// import cafeImage from "../../../assets/img/cafe.jpg"; // или другое изображение
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        {/* Заголовок */}
        <h2 className="section-title">О нас</h2>
        <p className="section-subtitle">
          Кафе <strong>"Бисмиллях"</strong> — это уютное место, предлагающее
          блюда кавказской кухни, приготовленные по домашним рецептам.
        </p>

        {/* Основной контент */}
        <div className="about-content">
          <div className="text-block">
            <h3>Добро пожаловать в «Бисмиллях»</h3>
            <p>
              Мы — кафе кавказской кухни, где каждый гость чувствует себя как
              дома.
            </p>
            <p>
              Все наши блюда соответствуют требованиям халяль, приготовлены с
              натуральными продуктами и без лишних добавок.
            </p>
            <p>
              В нашем меню вы найдёте:
              <ul>
                <li>Адыгейский сыр и чечетку</li>
                <li>Настоящий шашлык на мангале</li>
                <li>Супы и вторые блюда по-домашнему</li>
                <li>Фрукты, десерты и горячий чай</li>
              </ul>
            </p>
            <Link to="/menu/национальнаякухня" className="more-link">
              Посмотреть меню
            </Link>
          </div>

          <div className="image-block">
            <img alt="Кафе Бисмиллях" />
          </div>
        </div>

        {/* Преимущества */}
        <div className="features">
          <h3>Почему выбирают нас?</h3>
          <div className="feature-cards">
            <div className="feature-card">
              <span>🏔️</span>
              <h4>Кавказская кухня</h4>
              <p>Рецепты, переданные поколениями. Еда как дома.</p>
            </div>
            <div className="feature-card">
              <span>🌿</span>
              <h4>Халяльная еда</h4>
              <p>Все блюда соответствуют нормам халяль.</p>
            </div>
            <div className="feature-card">
              <span>👨‍🍳</span>
              <h4>Профессионалы</h4>
              <p>Наши повара — мастера своего дела.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
