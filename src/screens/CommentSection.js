import React, { useState } from "react";
import "./CommentSection.css"; // Импортируем CSS для стилей
import { FaStar } from "react-icons/fa";

const CommentSection = () => {
  const comments = [
    {
      name: "Марина",
      stars: 5,
      text: "Очень уютное место, отличная еда и доброжелательный персонал. Возвращаюсь сюда снова и снова!",
      url: "https://img.freepik.com/free-photo/medium-shot-woman-with-delicious-food_23-2150176904.jpg?semt=ais_hybrid&w=740",
    },
    {
      name: "Иван",
      stars: 4,
      text: "Вкусные завтраки, но иногда не хватает мест. Рекомендую бронировать заранее.",
      url: "https://img.freepik.com/free-photo/portrait-young-handsome-caucasian-man-park_181624-52207.jpg?semt=ais_hybrid&w=740",
    },
    {
      name: "Екатерина",
      stars: 5,
      text: "Лучший кофе в городе! Отличное меню, всё свежее и приготовлено с душой.",
      url: "https://img.freepik.com/free-photo/happy-middle-aged-woman-relaxing-outdoors_23-2148979101.jpg?semt=ais_hybrid&w=740",
    },
  ];

  return (
    <section className="comment-section">
      <div className="container">
        <h2 className="section-title">Отзывы наших клиентов</h2>
        {/* <p className="section-subtitle">
          Поделитесь своим впечатлением о кафе.
        </p> */}

        {/* Блок с отзывами */}
        <div className="reviews-container">
          {comments.map((item, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <img src={item.url} alt="Аватар" className="review-avatar" />
                <div>
                  <h3>{item.name}</h3>
                  <div className="stars">
                    {[...Array(item.stars)].map((_, i) => (
                      <FaStar key={i} className="star-icon filled" />
                    ))}
                    {[...Array(5 - item.stars)].map((_, i) => (
                      <FaStar key={i + item.stars} className="star-icon" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="review-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
