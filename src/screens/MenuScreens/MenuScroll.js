import "./menuScroll.css"; // Импортируем CSS для стилей
import { useState } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import pizza from "../../assets/img/pizza.png";
import potatoes from "../../assets/img/potatoes.png";
import desserts from "../../assets/img/desserts.png";
import sushi from "../../assets/img/sushi.png";
import Asia from "../../assets/img/Asia.png";
import Burgers from "../../assets/img/burgers.png";
import { Link } from "react-router-dom"; // Импортируем Link для навигации
const MenuScroll = () => {
  const comments = [
    {
      img: require("../../assets/img/BreakfastBanner.jpg"),
      name: "Завтраки",
      path: "/menu/завтраки",
    },
    {
      img: require("../../assets/img/SaladsBanner.webp"),
      name: "Салаты",
      path: "/menu/салаты",
    },
    {
      img: require("../../assets/img/SoupBanner.jpg"),
      name: "супы",
      path: "/menu/супы",
    },
    {
      img: require("../../assets/img/nationalBanner.jpg"),
      name: "Национальная кухня",
      path: "/menu/национальнаякухня",
    },
    {
      img: require("../../assets/img/dessertBanner.jpg"),
      name: "десерты",
      path: "/menu/десерты",
    },
    {
      img: require("../../assets/img/SecondBanner.jpg"),
      name: "Вторые блюда",
      path: "/menu/вторыеблюда",
    },
    {
      img: require("../../assets/img/garnishBanner.png"),
      name: "Гарниры",
      path: "/menu/гарниры",
    },
  ];
  const [lef, setLeft] = useState(0);

  const moveBlock = (direction) => {
    const add = 460;
    if (direction === "next" && lef >= -460) {
      setLeft(lef - add);
    } else if (direction === "prev" && lef !== 0) {
      setLeft(lef + add);
    }
  };
  return (
    <div style={styles.top}>
      <div className="container">
        <div style={styles.ttt}>
          <div style={styles.kkk}>
            <p className="titleOfMove" style={styles.MenuWord}>
              Меню
            </p>
            <text style={styles.more}>
              <Link to="/menu" className="more">
                Посмотреть больше
              </Link>
            </text>
            <div style={{ marginLeft: lef + "px", ...styles.generalItems }}>
              {comments.map((item, index) => (
                <Link to={item.path} key={index} className="linksNav">
                  <div style={styles.fitem} className="fitem">
                    <div>
                      <img src={item.img} style={styles.blockImg} alt="cafe" />
                    </div>
                    <div style={styles.content}>
                      <p className="words CategoryName">{item.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* {lef !== 0 && (
            <HiOutlineArrowSmLeft
              style={styles.arrows}
              className="arrow"
              onClick={() => moveBlock("prev")}
            />
          )}
          {lef >= -460 && (
            <HiOutlineArrowSmRight
              style={styles.arrowSecond}
              className="arrow"
              onClick={() => moveBlock("next")}
            />
          )} */}
          {/* С этого момента я понял, что страница скролится вправо */}
        </div>
      </div>
    </div>
  );
};

export default MenuScroll;
const styles = {
  top: {
    marginTop: "40px",
    // marginBottom: "20px",
  },
  blockImg: {
    width: "104px",
    height: "104px",
    borderRadius: "50%", // <-- круглая картинка
    objectFit: "cover", // <-- обрезка с сохранением пропорций
  },
  fitem: {
    background: "#faf5f5",
    width: "200px",
    height: "197px",
    borderRadius: "10%", // <-- закругления у всей карточки
    marginRight: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease-in-out",
    overflow: "hidden", // <-- обрезка содержимого под border
    marginBottom: "-20px",
  },
  kkk: {
    overflow: "hidden",
  },
  generalItems: {
    display: "flex",
    marginTop: "35px",
    marginBottom: "40px",
    width: "2500px",
    transition: "all 0.5s ease",
  },
  arrows: {
    position: "absolute",
    top: "51%",
    left: "-2%",
    cursor: "pointer",
    transition: "all 0.5s ease",
    background: "#f75b4f",
    marginRight: "6px",
    padding: "13px",
    fontSize: "20px",
    borderRadius: "50%",
    color: "white",
  },
  arrowSecond: {
    cursor: "pointer",
    transition: "all 0.5s ease",
    background: "#f75b4f",
    marginRight: "6px",
    padding: "13px",
    fontSize: "20px",
    borderRadius: "50%",
    color: "white",
    position: "absolute",
    top: "51%",
    right: "-2%",
  },
  ttt: {
    position: "relative",
  },
};
