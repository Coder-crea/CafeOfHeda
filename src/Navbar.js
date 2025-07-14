import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMosque } from "react-icons/md";
import "./navbar.css";
const Navbar = () => {
  const location = useLocation();
  const [MenuCondition, setMenuCondition] = useState(false);

  if (MenuCondition === false) {
    return (
      <div className="HeadContainer">
        <div className="Logo">
          <div className="LogoText">
            <MdMosque className="IconLogo" />
            <div className="logoContainer">
              <span>Бисмиллях</span>
              <text className="descriptionLogo2">халяль*</text>
              <text className="descriptionLogo">кавказская кухня</text>
            </div>
          </div>
        </div>

        <nav>
          <i
            onClick={() => setMenuCondition(!MenuCondition)}
            class="fa-solid fa-bars"
          ></i>
          <ul>
            <li>
              <Link
                to="/"
                className="link"
                style={{
                  color:
                    location.pathname === "/" ? "blue" : "rgb(181, 174, 174)",
                }}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="link"
                style={{
                  color:
                    location.pathname === "/menu"
                      ? "blue"
                      : "rgb(181, 174, 174)",
                }}
              >
                Меню
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="link"
                style={{
                  color:
                    location.pathname === "/contact"
                      ? "blue"
                      : "rgb(181, 174, 174)",
                }}
              >
                Обратная связь
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="HeadContainer">
        <div className="Logo">
          <div className="LogoText">
            <MdMosque className="IconLogo" />

            <div className="logoContainer">
              <span>Бисмиллях</span>
              <text className="descriptionLogo2">халяль*</text>
              <text className="descriptionLogo">кавказская кухня</text>
            </div>
          </div>
        </div>
        <nav>
          <i
            onClick={() => setMenuCondition(!MenuCondition)}
            class="fa-solid fa-bars"
          ></i>
        </nav>
        <ul className="active">
          <Link to="/" className="link">
            <li onClick={() => setMenuCondition(!MenuCondition)}> Главная</li>
          </Link>
          <Link to="/menu" className="link">
            <li onClick={() => setMenuCondition(!MenuCondition)}>Меню</li>
          </Link>
          <Link to="/contact" className="link">
            <li onClick={() => setMenuCondition(!MenuCondition)}>
              Обратная связь
            </li>
          </Link>
        </ul>
      </div>
    );
  }
};

export default Navbar;
