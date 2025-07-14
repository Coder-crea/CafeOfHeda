import React from "react";
// import chef from "../assets/img/chef.png"; // Пример изображения
// import barista from "../assets/img/barista.png"; // Пример изображения
// import manager from "../assets/img/manager.png"; // Пример изображения
import "./About.css";
import "./Award.css";
import "./Team.css";
import { FaBowlFood } from "react-icons/fa6";

import { FaPeopleGroup } from "react-icons/fa6";
import halal from "../assets/img/halal.jpg";
const Team = () => {
  // const teamMembers = [
  //   {
  //     name: "Александр",
  //     role: "Шеф-повар",
  //     description:
  //       "Любитель экспериментировать с вкусами, создаёт уникальные блюда.",
  //     // img: chef,
  //   },
  //   {
  //     name: "Мария",
  //     role: "Бариста",
  //     description:
  //       "Всегда знает, как приготовить идеальный капучино для каждого клиента.",
  //     // img: barista,
  //   },
  //   {
  //     name: "Дмитрий",
  //     role: "Управляющий",
  //     description: "Создаёт уютную атмосферу и заботится о каждом госте лично.",
  //     // img: manager,
  //   },
  // ];

  return (
    <section className="team-section">
      <div className="container">
        {/* <h2 className="section-title">Наша команда</h2>
        <p className="section-subtitle">
          Мы — команда профессионалов, которая делает кафе особенным местом.
        </p>

        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.img} alt={member.name} className="team-img" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div> */}

        {/* Дополнительно: преимущества кафе */}
        <div className="features">
          <h2>Почему выбирают нас?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FaBowlFood style={{ fontSize: "50px" }} />
              <h3>Кавказская кухня</h3>
              <p>Рецепты, переданные поколениями. Еда как дома.</p>
            </div>
            <div className="feature-card">
              <img
                src={halal}
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                alt="Halal"
              />
              <h3>Халяльная еда</h3>
              <p>Все блюда соответствуют нормам халяль.</p>
            </div>
            <div className="feature-card">
              <FaPeopleGroup style={{ fontSize: "50px" }} />
              <h3>Профессионалы</h3>
              <p>Наши сотрудники — мастера своего дела.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
