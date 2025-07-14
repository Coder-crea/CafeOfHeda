import React from "react";
import Banner from "../assets/img/BannerBlock.png";
import "./Team.css";
const BannerBlock = () => {
  return (
    <div style={styles.Banner}>
      <img src={Banner} style={styles.Banner} alt="banner" />
      <div className="container">
        <p className="section-subtitle3">
          Кафе <strong>"Бисмиллях"</strong> — это уютное место, предлагающее
          блюда кавказской кухни, приготовленные по домашним рецептам.
        </p>
      </div>
    </div>
  );
};

export default BannerBlock;

const styles = {
  Banner: {
    width: "100%",
    height: "100%",
  },
};
