import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuHeader.css";
import { useLayoutEffect } from "react";

import imgBreak from "../../assets/img/BreakfastBanner.jpg";
import imgSalads from "../../assets/img/SaladsBanner.webp";
import imgHot from "../../assets/img/SecondBanner.jpg";
import imgNation from "../../assets/img/nationalBanner.jpg";
import imgSoup from "../../assets/img/SoupBanner.jpg";
import imgGarnirs from "../../assets/img/garnishBanner.png";
import imgDrink from "../../assets/img/drinksBanner.jpg";
import imgBread from "../../assets/img/dessertBanner.jpg";
const MenuHeader = () => {
  const navigate = useNavigate();

  const categoryNames = [
    {
      name: "Завтраки",
      path: "/menu/завтраки",
      img: imgBreak,
    },
    {
      name: "Салаты",
      path: "/menu/салаты",
      img: imgSalads,
    },
    {
      name: "Вторые блюда",
      path: "/menu/горячее",
      img: imgHot,
    },
    {
      name: "Национальные блюда",
      path: "/menu/национальныеблюда",
      img: imgNation,
    },
    {
      name: "Супы",
      path: "/menu/супы",
      img: imgSoup,
    },
    {
      name: "Гарниры",
      path: "/menu/гарниры",
      img: imgGarnirs,
    },
    {
      name: "Выпечка",
      path: "/menu/выпечка",
      img: imgBread,
    },
    {
      name: "Напитки",
      path: "/menu/напитки",
      img: imgDrink,
    },
  ];
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <div style={styles.picture}>
        <img
          src="https://optim.tildacdn.one/tild6631-6331-4331-b135-643465613832/-/format/webp/noroot.png.webp"
          alt="menu"
        />

        <p style={styles.breakfast} className="PreviewTextMenu">
          Меню
        </p>
      </div>

      <div className="container">
        <p
          className="words"
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        >
          Что есть в меню?
        </p>
        <text style={{ color: "#2C2C2C" }} className="description">
          Все что угодно, на ваш вкус.
        </text>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: "20px",
            marginBottom: "50px",
          }}
        >
          {categoryNames.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              style={styles.categoryCard}
              className="breakfastItem clicksMenu brekItem"
            >
              <div style={styles.blockimg}>
                <img src={item.img} style={styles.img} alt={item.name} />
                <p style={styles.categoryLabel} className="description">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;

// 🎨 Стили
const styles = {
  picture: {
    position: "relative",
    overflow: "hidden",
    height: "300px", // фиксируем высоту
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    marginBottom: "2rem",
  },
  breakfast: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
    textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
    margin: 0,
    zIndex: "2",
  },
  blockimg: {
    position: "relative",
    width: "300px",
    height: "200px",
    margin: "auto",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    objectFit: "cover",
  },
  categoryCard: {
    width: "300px",
    borderRadius: "15px",
    cursor: "pointer",
    marginBottom: "40px",
    transition: "transform 0.3s ease",
  },
  categoryLabel: {
    position: "absolute",
    top: "4%",
    left: "4%",
    background: "black",
    color: "white",
    padding: "8px 10px",
    borderRadius: "8px",
    fontSize: "15px",
  },
};
