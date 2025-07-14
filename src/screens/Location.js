import React from "react";
import "./Location.css";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
const Location = () => {
  return (
    <section className="location-section">
      <div className="container">
        <h2 className="section-title1">Где нас найти</h2>
        <p className="section-subtitle2">
          Приходите к нам на кофе, еду или просто отдохнуть в уютной атмосфере.
        </p>

        <div className="map-wrapper">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1aASDASDasdadasd&source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
            title="map"
            allowFullScreen={true}
          ></iframe>
        </div>

        <div className="address-info">
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "12px",
            }}
          >
            <IoLocationOutline
              style={{ fontSize: "20px", marginRight: "5px" }}
            />
            Москва, ул. Ленина, д. 15
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CiClock2 style={{ fontSize: "20px", marginRight: "5px" }} />{" "}
            Работаем ежедневно с 9:00 до 22:00
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
