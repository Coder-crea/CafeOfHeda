import React from "react";
// import { useEffect, useState } from "react";
import "./Footer.css";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdMosque } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      style={{
        background: "#2C2C2C",
        color: "white",
        padding: "13px",
        paddingBottom: "50px",
      }}
    >
      <div className="container">
        <div style={{ paddingTop: "15px" }}>
          <div className="Logo" style={{ width: "100%", marginBottom: "25px" }}>
            <div className="LogoText LogoTextFooter">
              <MdMosque className="IconLogo" />
              <div className="logoContainer">
                <text>Бисмиллях</text>
                <text className="descriptionLogo2">халяль*</text>
                <text className="descriptionLogo">кавказская кухня</text>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={styles.AppsLinks}>
          <div>
            <p
              className="words"
              style={{ fontWeight: "bold", fontSize: "20px" }}
            >
              Нас можно найти здесь
            </p>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li
                className="words FooterLinks"
                style={{
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaTelegram
                  style={{
                    fontSize: "25",
                    marginRight: "12px",
                  }}
                />
                Telegram
              </li>
              <li
                className="words FooterLinks"
                style={{
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaInstagram
                  style={{
                    fontSize: "25",

                    marginRight: "12px",
                  }}
                />
                Instagram
              </li>
              <li
                className="words FooterLinks"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaTwitter
                  style={{
                    fontSize: "25",

                    marginRight: "12px",
                  }}
                />
                Twitter
              </li>
            </ul>
          </div>
          {/* Second Section */}
        {/* <div>
            <p
              className="words"
              style={{ fontWeight: "bold", fontSize: "20px" }}
            >
              Обратная связь
            </p>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li
                className="words FooterLinks"
                style={{ marginBottom: "12px" }}
              >
                <Link to={"/contact"} className="FooterLinks">
                  Поддержка
                </Link>
              </li>
              <li className="words FooterLinks"></li>
            </ul>
          </div> */}
        {/* </div> */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Бисмиллях. Все права защищены</p>
          <p>
            Проект реализован при поддержке{" "}
            <a
              href="https://fasie.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Фонда содействия инновациям
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
const styles = {
  AppsLinks: {
    display: "flex",
    justifyContent: "space-around",
  },
};
