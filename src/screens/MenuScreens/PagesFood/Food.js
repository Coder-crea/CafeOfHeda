import React, { useLayoutEffect } from "react";
// import Papa from "papaparse";
import { useNavigate, useParams } from "react-router-dom";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import "./BreakFast.css";
// ⬇️ Импорт Lottie
import Lottie from "lottie-react";
import foodLoader from "../../../assets/Loads/Animation - 1750954244050.json";

// 🖼️ Изображения
import SaladBackground from "../../../assets/img/SaladBackground.jpg";
import BreakfastImg from "../../../assets/img/Image.png";

// 🎣 Хук
import { useFetchMenu } from "../../../hooks/useFetchMenu";

// Тексты для каждой категории
const categoryDescriptions = {
  завтраки: {
    title: "Утреннее настроение",
    description: "Лучшие завтраки, чтобы начать день правильно.",
  },
  салаты: {
    title: "Свежие салаты",
    description:
      "Полезные и вкусные салаты, приготовленные с заботой о здоровье.",
  },
  супы: {
    title: "Тепло в тарелке",
    description: "Свежие домашние супы на любой вкус.",
  },
  национальныеблюда: {
    title: "Блюда со всего мира",
    description: "Кухни разных стран в одном месте — попробуйте всё!",
  },
  горячее: {
    title: "Главные блюда",
    description: "Традиционные вторые блюда для сытного обеда.",
  },
  гарниры: {
    title: "Аккомпанемент вкуса",
    description: "Разнообразные гарниры, которые дополнят любое блюдо.",
  },
  выпечка: {
    title: "Сладкие моменты",
    description: "Изысканные десерты для сладкоежек.",
  },
  напитки: {
    title: "На любой вкус",
    description: "Освежающие и согревающие напитки.",
  },
  дополнительно: {
    title: "Ещё немного?",
    description: "Хотите чего-нибудь ещё? У нас есть и это.",
  },
};

// Компонент Food
const Food = () => {
  const navigate = useNavigate();
  const { category } = useParams(); // Получаем категорию из URL
  const decodedCategory = decodeURIComponent(category).toLowerCase(); // Приводим к нижнему регистру

  const { data, isLoading, error } = useFetchMenu(decodedCategory);

  // Получаем текстовое описание
  const texts = categoryDescriptions[decodedCategory] || {
    title: decodedCategory,
    description: "Меню загружено.",
  };
  const getBannerUrl = (category) => {
    switch (category) {
      case "завтраки":
        return require("../../../assets/img/BreakfastBanner.jpg");
      case "салаты":
        return require("../../../assets/img/SaladsBanner.webp");
      case "супы":
        return require("../../../assets/img/SoupBanner.jpg");
      case "национальныеблюда":
        return require("../../../assets/img/nationalBanner.jpg");
      case "горячее":
        return require("../../../assets/img/SecondBanner.jpg");
      case "гарниры":
        return require("../../../assets/img/garnishBanner.png");
      case "выпечка":
        return require("../../../assets/img/dessertBanner.jpg");
      case "напитки":
        return require("../../../assets/img/drinksBanner.jpg");
      default:
        return BreakfastImg;
    }
  };
  // 🔁 Прокрутка вверх при монтировании
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // 🔁 Анимация загрузки
  const LottieLoader = () => (
    <div style={styles.loaderOverlay}>
      <Lottie animationData={foodLoader} style={styles.lottie} />
      <p style={styles.loaderText} className="loaderText">
        Загружаем блюда...
      </p>
    </div>
  );

  return (
    <div style={{ marginBottom: "60px" }}>
      {/* Кнопка назад */}
      <HiOutlineArrowSmLeft
        onClick={() => navigate(-1)}
        style={styles.arrow}
        className="arrow"
      />

      {/* Баннер */}
      <div style={styles.picture}>
        <img src={getBannerUrl(decodedCategory)} alt={texts.title} />
        <p style={styles.breakfast} className="PreviewTextMenu">
          {texts.title}
        </p>
      </div>

      {/* Описание */}
      <div className="container">
        <p
          className="words"
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          {texts.title}
        </p>
        <text style={{ color: "#2C2C2C" }} className="description">
          {texts.description}
        </text>

        {/* Карточки меню */}
        {isLoading ? (
          <LottieLoader />
        ) : error ? (
          <p style={{ color: "red", padding: "20px" }}>{error}</p>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              marginTop: "0px",
            }}
          >
            {data.map((item, index) => (
              <div style={styles.item} className="breakfastItem" key={index}>
                <div style={styles.blockimg}>
                  <img
                    src={item.image_url || SaladBackground}
                    style={styles.img}
                    alt={item.name}
                  />
                </div>
                <div style={styles.content}>
                  <p className="FoodTitle">{item.name}</p>
                  <text className="foodDescription">
                    {item.description || "Описание отсутствует"}
                  </text>
                  <p className="weight">({item.weight})</p>
                  <div className="price">{item.price} руб.</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Food;

// 🎨 Стили (скопируй или используй CSS модуль)
const styles = {
  arrow: {
    cursor: "pointer",
    transition: "all 0.5s ease",
    background: "black",
    marginRight: "6px",
    padding: "10px",
    fontSize: "20px",
    borderRadius: "50%",
    color: "white",
    top: "14%",
    left: "1%",
    position: "fixed",
    zIndex: "2",
  },
  img: {
    width: "100%",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  content: {
    paddingBottom: "50px",
    paddingRight: "15px",
    paddingLeft: "15px",
  },
  item: {
    maxWidth: "300px",
    width: "100%",
    background: "#2b2b2a",
    borderRadius: "15px",
    color: "white",
    marginTop: "40px",
    marginBottom: "20px",
    boxSizing: "border-box",
  },

  blockimg: {
    overflow: "hidden",
    height: "200px",
  },
  loaderOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  lottie: {
    width: "200px",
    height: "200px",
  },
  loaderText: {
    marginTop: "15px",
    fontSize: "18px",
    fontWeight: "500",
    textAlign: "center",
    opacity: 0.9,
  },

  // ... существующие стили ...

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

  bannerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // сохраняет пропорции, обрезает лишнее
    display: "block",
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
};
